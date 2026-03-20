import { HashRouter, Routes, Route, Link } from "react-router-dom";

import SilverLayerScriptGen from "./pages/SilverLayerScriptGen";
import BusinessLayerScriptGen from "./pages/BusinessLayerScriptGen";

function App() {

    return (
        <HashRouter>

            <nav>
                <Link to="/">Silver Layer</Link> |
                <Link to="/business"> Business Layer</Link>
            </nav>

            <Routes>
                <Route path="/" element={<SilverLayerScriptGen />} />
                <Route path="/business" element={<BusinessLayerScriptGen />} />
            </Routes>

        </HashRouter>
    );
}

export default App;