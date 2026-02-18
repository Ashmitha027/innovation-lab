import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h3>
                Hi, click here to get the page: Post.jsx  
                <Link to="/post"> Go</Link>
            </h3>
        </div>
    );
}
