import React from "react";
import "./section.css";
import Title from "../title";
import Input from "../input";
import ListBody from "../list-body";
import data from '../../data'

const Section = () => {
    return (
    <section className="to-do-list">
        <Title></Title>
        <Input></Input>
        <ListBody data={data}></ListBody>
    </section>
    );
};

export default Section;
