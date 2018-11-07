

const splitPosts = (posts, chunk) => {
    let column = 0;
    let numRow = 0;
    const chuncksOf = posts.reduce( ( rows, post ) => {
      rows[numRow] = rows[numRow] || [];
      rows[numRow][column] = rows[numRow][column] || {};
      rows[numRow][column] = post;
      column++;
      if(column % chunk === 0){
        numRow++;   
        column = 0;  
      }
      return rows;
  }, []);
 return chuncksOf;
}

export { splitPosts };