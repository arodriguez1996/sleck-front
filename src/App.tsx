import {Routes, Route} from "react-router-dom";
import {SignUpContainer} from "./containers/SignUpContainer/SignUpContainer";
import {ChatContainer} from "./containers/ChatContainer/ChatContainer";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUpContainer/>}/>
            <Route path="/chat/:userId" element={<ChatContainer/>}/>
        </Routes>
    )
}

export default App;
