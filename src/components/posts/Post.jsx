import React from 'react';
import convert from 'htmr';

import bulma from "images/bulma-logo.png";

const Post = ({ author, title, category, date, contents }) => {
    return (
        <div className="post-wrapper">
            <div className="header-content">
                <img alt={title} src={bulma} />
                <h1 className="title is-4">
                    {title}
                </h1>
                <small><i>Postado em <a href="category.html"> {category}</a> em
            <a href="post.html"> {date}</a> por
            <a href="category.html"> {author}</a></i></small>
            </div>
            <div className="content">
                {convert(contents)}
            </div>            
        </div>
    )
};

export default Post;