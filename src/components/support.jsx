import React from "react";
import Navigation from "./navigation";
import styles from "./support.module.css";

const support = ({ title }) => {
    return (
        <div className="container">
            <h1 className={styles.title}>{title}</h1>
            <Navigation />
        </div>
    );
};

export default support;
