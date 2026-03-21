/**
 * One-time script to generate random 8-char short slugs for blog posts
 * that don't already have one. Run with: bun scripts/generate-short-slugs.ts
 *
 * Safe to re-run: skips posts that already have a shortSlug.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const BLOG_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'blog')
const CHARSET = 'abcdefghijklmnopqrstuvwxyz0123456789'
const SLUG_LEN = 8

function randomSlug(): string {
  let slug = ''
  for (let i = 0; i < SLUG_LEN; i++) {
    slug += CHARSET[Math.floor(Math.random() * CHARSET.length)]
  }
  return slug
}

const files = (await readdir(BLOG_DIR)).filter(f => f.endsWith('.mdx'))
const usedSlugs = new Set<string>()

// First pass: collect existing short slugs
for (const file of files) {
  const content = await readFile(join(BLOG_DIR, file), 'utf-8')
  const match = content.match(/^shortSlug:\s*['"]?(\w+)['"]?/m)
  if (match) usedSlugs.add(match[1])
}

// Second pass: generate for posts that need one
for (const file of files) {
  const content = await readFile(join(BLOG_DIR, file), 'utf-8')

  if (/^shortSlug:/m.test(content)) {
    console.log(`skip ${file} (already has shortSlug)`)
    continue
  }

  let slug: string
  do {
    slug = randomSlug()
  } while (usedSlugs.has(slug))
  usedSlugs.add(slug)

  // Insert shortSlug before the closing --- of frontmatter (second occurrence)
  const fenceIndex = content.indexOf('---', content.indexOf('---') + 3)
  const updated = content.slice(0, fenceIndex) + `shortSlug: '${slug}'\n` + content.slice(fenceIndex)
  await writeFile(join(BLOG_DIR, file), updated)
  console.log(`${file} → ${slug}`)
}

console.log('done')
