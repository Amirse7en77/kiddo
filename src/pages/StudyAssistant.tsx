import React, { FC } from "react";
import Header from "../components/studyAssistant/Header";
import HeroSection from "../components/studyAssistant/HeroSection";
import CardSection from "../components/studyAssistant/CardSection";

interface IProps {};

const StudyAssistant:FC<IProps> = (props) => {
    return <div className="font-yekanBakh">
        <Header/>
        <div className="bg-backGround-1 gap-[32px]">
    <HeroSection/>
    <CardSection/>
    <CardSection/>
    <CardSection/>
        </div>
    </div>
};

export default StudyAssistant;