const fs = require('fs');
const jdown = require('jdown');

const createIfNotExists = diretory => {
	if (!fs.existsSync(diretory)) {
		fs.mkdirSync(diretory, 0766, function (err) {
			if (err) {
				console.log(err);
				return false;
			}
		});
	}
	return true;
}

jdown('content', { assets: { output: 'public' } }).then(({ posts }) => {

	const categories = posts.reduce((allPosts, { category, date, slug, ...rest }) => {
		allPosts[category] = allPosts[category] || []
		allPosts[category][date] = allPosts[category][date] || [];
		allPosts[category][date][slug] = allPosts[category][date][slug] || {};
		allPosts[category][date][slug] = { category, date, slug, ...rest };
		return allPosts;
	}, []);

	const postsMap = [];

	for (let category in categories) {
		let diretory = 'src/posts/' + category.toLocaleLowerCase().trim();
		postsMap[category] = postsMap[category] || []
		if (createIfNotExists(diretory)) {
			let datesInCategory = categories[category];
			for (let date in datesInCategory) {
				date = date.replace('/', '-').trim();
				postsMap[category][date] = postsMap[category][date] || [];
				if (createIfNotExists(diretory + '/' + date)) {
					let postsInDate = datesInCategory[date];
					for (let slug in postsInDate) {
						postsMap[category][date][slug] = postsMap[category][date][slug] || {};
						let post = postsInDate[slug];
						let file = diretory + '/' + date + '/' + slug + '.json';
						postsMap[category][date][slug] = postsMap[category][date][slug] = post.title;
						fs.writeFileSync(file, JSON.stringify(post), 'utf8');
					}
				}
			}
		}
	}
	fs.writeFileSync('src/posts/postsmap.json', JSON.stringify(postsMap), 'utf8');
});
