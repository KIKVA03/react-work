import React from "react";
import "./style.scss";
import Navigation from "../navigation";
import { Modale } from "../modale.jsx";
import { useContext } from "react";

const HomePage = ({ title }) => {
    const modaleValue = useContext(Modale);
    console.log(modaleValue);
    return (
        <div>
            <header>
                <h1>{title}</h1>
                <Navigation />
            </header>
            <div className="article-wrapper">
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore qui
                    nobis asperiores nisi accusantium dicta numquam cum neque sint?
                </article>
                <article>
                    <em>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore qui
                        nobis asperiores nisi accusantium dicta numquam cum neque sint?
                    </em>
                </article>
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore qui
                    nobis asperiores nisi accusantium dicta numquam cum neque sint?
                </article>
            </div>
            <div>
                <button
                    onClick={() => {
                        modaleValue.dato();
                    }}
                >
                    modalee button
                </button>
            </div>
        </div>
    );
};

export default HomePage;
