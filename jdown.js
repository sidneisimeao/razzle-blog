const fs = require('fs');
const jdown = require('jdown');

jdown('content', { assets: { output: 'public' } }).then(({ posts }) => {

	const categories = posts.reduce((allPosts, { category, date, slug, ...rest }) => {
		allPosts[category] = allPosts[category] || []
		allPosts[category][date] = allPosts[category][date] || [];
		allPosts[category][date][slug] = allPosts[category][date][slug] || [];
		allPosts[category][date][slug].push({ category, date, slug, ...rest });
		return allPosts;
	}, []);

	
	for (var category in categories) {

		stats = fs.readFile('src/posts/'+category);

		if (!stats.existsSync()) {
			fs.mkdir('src/posts/'+ category);
		}

		let datesInCategory = categories[category];
		for (const date in datesInCategory) {
			let postsInDate = datesInCategory[date];
		//	console.log(postsInDate); 
			
			
		}
	}
	


	//	fs.writeFileSync('src/posts/posts.json', JSON.stringify(content), 'utf8');
});
