import React, { Fragment } from 'react'
import Helmet from 'react-helmet';
import convert from 'htmr';
import { Link } from 'react-router-dom';

const canonical = "https://www.sidneisimmon.com/blog";

const Post = ({ author, slug, title, category, date, resume, contents }) => (
    <Fragment>
        <Helmet>
            <meta property="og:url" content={`${canonical}/blog/post/${slug}`} />
            <link rel="canonical" href={`${canonical}/blog/post/${slug}`} />                 
            <meta property="og:title" content={title} />           
            <meta property="og:description" content={resume} />
            <meta name="description" content={resume} />
        </Helmet>
    <section class="hero is-medium is-primary is-bold">
    <div class="hero-body has-text-centered">
        <div class="container">
            <h2 class="subtitle">
                {date}
            </h2>
            <h1 class="title">
               {title}
            </h1>
            <h2 class="subtitle">
               {resume}
            </h2>
        </div>        
     </div>       
    </section>     
    <div className="main-content">    
      <div className="container">     
        <div className="columns is-centered">
        <div className="column is-four-fifths">            
            <div className="header-content"> 
                 <small><i>Postado em <a href="category.html"> {category}</a> em
                 <a href="post.html"> {date}</a> por <a href="category.html"> {author}</a></i></small>
            </div>
            <div className="content">
                {convert(contents)}
            </div>          
            <div className="content-footer">               
                <p>
                <Link className="button menu-label" to={`/blog/`}>Voltar a todas postagens</Link>               
                </p>
            </div>
         </div>
        </div>
      </div>
    </div>       
    </Fragment>
);

export default Post;