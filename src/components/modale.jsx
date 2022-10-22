import { useState, createContext } from "react";

export const Modale = createContext();

function Main({ children }) {
    const [isModaleShown, setIsModaleShown] = useState(false);

    const setModale = () => {
        setIsModaleShown((prev) => !prev);
    };

    return <Modale.Provider value={{ isModaleShown, dato: setModale }}>{children}</Modale.Provider>;
}
export default Main;
