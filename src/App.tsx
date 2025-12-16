import Layout from "@/layouts/Layout.tsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "@/pages/Home/Home.tsx";
import Schedule from "@/pages/Schedule/Schedule.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/schedule" element={<Schedule />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
