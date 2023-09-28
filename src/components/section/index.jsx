import React, { Component } from "react";
import "./section.css";
import Title from "../title";
import Input from "../input";
import ListItem from "../list-item";

class Section extends Component {
    state = {
        data : []
    }

    onData = (value) => {
        if(value) {
            this.setState((state) => {
                return {
                    data : [...state.data, value]
                }
            })            
            } else {
                console.log('Error')
            }
        }

    render() {
        // console.log(this.state.data)
        return (
            <section className="to-do-list">
                <Title></Title>
                <Input onData={this.onData}></Input>
                <div className="list-body">
                    <ListItem data={this.state.data}></ListItem>
                </div>
            </section>
        )
    }
}

// const Section = () => {
//     let data = []

//     function onData(value) {
//         data.push(value)
//     }

//     return (
//     <section className="to-do-list">
//         <Title></Title>
//         <Input onData={onData}></Input>
//         <ListItem data={data}></ListItem>
//     </section>
//     );
// };

export default Section;
