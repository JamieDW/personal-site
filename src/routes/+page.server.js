export async function load({ params }) {
	const response = await fetch('https://dummyjson.com/posts');

	const articles = await response.json();

	return { articles: articles.posts.slice(0, 3) };
}
