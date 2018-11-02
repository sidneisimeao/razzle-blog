import React from "react";

const Nav = () => (
    <div className="column is-full-mobile is-one-third-tablet">
        <div className="nav-header">
            <h3 className="title is-3">bulma blog.</h3>
            <h4 className="subtitle is-4"><i>it's what you need. probably.</i></h4>
        </div>
        <hr />       
        <div className="nav-footer has-text-right">
            <p><i><b>
                <a href="category.html">Field</a></b>,
                <a href="category.html"><b>Category</b></a>,
                <a href="category.html"><b>oi</b>
                </a></i>
            </p>
        </div>
    </div>
);

export default Nav;