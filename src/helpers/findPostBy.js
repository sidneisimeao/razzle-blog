
const bySlug = (posts, slug) => posts.find(post => post.slug === slug);

export { bySlug };