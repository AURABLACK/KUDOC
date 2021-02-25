import React from 'react';
import Header from "./Header";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import BottomNavBar from "./BottomNavBar";
import CreatePageSection from "./CreatePageSection"

function Create() {
    return(
        <div>
            <TopNavBar></TopNavBar>
            <BottomNavBar></BottomNavBar>
            <CreatePageSection></CreatePageSection>
            <Footer></Footer>
        </div>
    );
}

export default Create