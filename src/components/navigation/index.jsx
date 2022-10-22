import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Navigation = ({ title }) => {
    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>
            <ul>
                <li>
                    <Link to="/lasha">Form</Link>
                </li>
                <li>
                    <Link to="/dato">HomePage</Link>
                </li>

                <li>
                    <Link to="/support">support</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
