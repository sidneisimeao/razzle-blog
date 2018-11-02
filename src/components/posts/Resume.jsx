import React from 'react';
import convert from 'htmr';
import { Link } from 'react-router-dom';

import "styles/css/post.css";

const Resume = ({ author, slug, title, category, date, resume }) => {
    return (
        <div className="post-wrapper">
            <div className="header-content">               
                <h1 className="title is-4">
                    {title}
                </h1>
                <small><i>Postado em <a href="category.html"> {category}</a> em
            <a href="post.html"> {date}</a> por
            <a href="category.html"> {author}</a></i></small>
            </div>
            <div className="content">
                {convert(resume || '')}
            </div>
            <div className="content-footer">               
                <p>
                <Link className="button menu-label" to={`/blog/post/${slug}`}> Continuar lendo</Link>               
                </p>
            </div>
        </div>
    )
};

export default Resume;