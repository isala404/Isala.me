import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*/index.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const pathParts = path.split('/');
		const directory = pathParts.at(-2);
		const filename = pathParts.at(-1)?.replace('.md', '');
		const slug = directory && filename ? `blog/${directory}/` : '';

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
