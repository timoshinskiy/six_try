import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";

function App(){
    return(
        <>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'profile'} element={<Profile/>}/>
            </Routes>
        </>
    );
}

export default App;