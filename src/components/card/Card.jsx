import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import { formatMonthDateInExtensive } from "helpers/dateToBr";

const Card = ({ post, theme }) => {   
        
     const tags = post.tags.split(',');
     const date = formatMonthDateInExtensive(post.date);
          
     return (
        <div className={classNames('card', theme['card'] || '')}>
           <Link to={`/blog/post/${post.slug}`} key={post.slug}>        
                <header className={classNames('card-header', theme['card-header'] || '')}>
                    <p className={classNames('card-header-title', theme['card-header-title'] || '')}>
                    {date}
                    </p>           
                </header>
                <div className={classNames('card-content')}>
                    <div className="content">           
                    <h3 className={classNames('subtitle', theme['subtitle'] || '')}>{post.title}</h3>
                    <p className={classNames(theme['content-resume'] || '')}>{post.resume}</p>           
                    </div>
                </div>
            </Link>
            <footer className={classNames('card-footer', theme['card-footer'] || '')}>
            {tags.map( tag => <Link to={`/blog/search/${tag}`} key={tag} className={classNames(theme['card-footer-item'] || '')}>{tag}</Link>)}           
            </footer>
        </div>
    )
};

export default Card;