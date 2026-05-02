import { renderMermaidSVG, THEMES } from 'beautiful-mermaid'
import type { Root, Code, Html } from 'mdast'
import { visit } from 'unist-util-visit'

export function remarkMermaid() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code, index, parent) => {
      if (node.lang !== 'mermaid' || index == null || !parent) return

      let svg: string
      try {
        svg = renderMermaidSVG(node.value, {
          ...THEMES['github-dark'],
          transparent: true,
        })
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        console.warn(`[remark-mermaid] Failed to render diagram: ${msg}`)
        return
      }

      const html: Html = {
        type: 'html',
        value: `<div class="mermaid-diagram">${svg}</div>`,
      }

      parent.children.splice(index, 1, html)
    })
  }
}
