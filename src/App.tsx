import {Routes, Route} from "react-router-dom";
import {SignUpContainer} from "./containers/SignUpContainer/SignUpContainer";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUpContainer/>}/>
        </Routes>
    )
}

export default App;
