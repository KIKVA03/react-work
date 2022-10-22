import "./App.scss";
import Form from "./components/Form";
import Navigation from "./components/navigation";
import HomePage from "./components/homepage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Jayeout";
import Main from "./components/modale.jsx";
import Support from "./components/support.jsx";

function App() {
    return (
        <div className="App">
            <Main>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Navigation title="Navigation" />} />
                        <Route path="/lasha" element={<Form title="Form Page" />} />
                        <Route path="/dato" element={<HomePage title="Home Page" />} />
                        <Route path="/support" element={<Support title="Support" />} />
                    </Routes>
                </Layout>
            </Main>
        </div>
    );
}

export default App;
