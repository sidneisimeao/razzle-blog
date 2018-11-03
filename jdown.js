const fs = require('fs');
const jdown = require('jdown');

jdown('content', { assets: { output: 'public' } }).then(( posts ) => {
	fs.writeFileSync('src/posts/postsmap.json', JSON.stringify(posts), 'utf8');
});
