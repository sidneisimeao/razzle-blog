import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import convert from 'htmr';

const Post = ({ author, category, date, contents }) => (
    <Fragment>
        <div className="header-content">
            <small>
                <i>Postado em
                     <Link to={`/blog/category/${category}`}> {category} </Link> em
                     <Link to={`/blog/date/${date}`}> {date} </Link> por
                     <Link to={`/blog/author/${author}`}> {author} </Link>
                </i>
            </small>
        </div>
        <div className="content">
            {convert(contents)}
        </div>
        <div className="content-footer">
            <p><Link className="button menu-label" to={`/blog/`}>Voltar a todas postagens</Link></p>
        </div>
    </Fragment>
);

export default Post;