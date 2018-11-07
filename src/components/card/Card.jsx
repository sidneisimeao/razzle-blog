import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";

const Card = ({ post, theme }) => {   
        
     const tags = post.tags.split(',');
     
     return (
        <div className={classNames('card')}>
            <header className={classNames('card-header')}>
                <p className="card-header-title">
                {post.date}
                </p>           
            </header>
            <div className={classNames('card-content')}>
                <div className="content">           
                <h3 className={classNames('subtitle', theme.subtitle)}>{post.title}</h3>
                <p>{post.resume}</p>           
                </div>
            </div>
            <footer className="card-footer">
            {tags.map( tag => <Link to={`/blog/search/${tag}`} key={tag} className="card-footer-item">{tag}</Link>)}           
            </footer>
        </div>
    )
};

export default Card;