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
       <Route path="/Documentsid" element={<Onboarddocuments/>}/>
       <Route path="/Nomineebankdetails" element={<Onboardnomine/>}/>
       <Route path="/JoiningDoc" element={<Onboardjoining/>}/>
        </Routes>
        </>
    )
}
export default Onboardpersonview;