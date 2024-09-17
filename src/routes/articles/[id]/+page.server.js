export async function load({ params }) {
	const response = await fetch(`https://dummyjson.com/posts/${params.id}`);

	const article = await response.json();

	return { article };
}
