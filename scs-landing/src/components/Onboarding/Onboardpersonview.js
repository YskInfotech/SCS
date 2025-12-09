import React from "react";
import {Route, Routes } from "react-router-dom";
import Onboardpersonalinfo from "./Onboardpersonalinfo";
import Onboarddocuments from "./Onboarddocuments";
import Onboardnomine from "./Onboardnomine";
import Onboardjoining from "./Onboardjoining";

function Onboardpersonview(){
    return(
        <>
         <Routes>   
        <Route path="/" element={<Onboardpersonalinfo/>}/> 
       <Route path="/Onboarddocuments" element={<Onboarddocuments/>}/>
       <Route path="/Onboardnomine" element={<Onboardnomine/>}/>
       <Route path="/Onboardjoining" element={<Onboardjoining/>}/>
        </Routes>
        </>
    )
}
export default Onboardpersonview;