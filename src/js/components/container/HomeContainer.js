import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "../presentational/tittle";
import Content from "../presentational/content";
import Contact from "../presentational/contact";
import '../../../css/style.css';

class HomeContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="row align-self-center w-100 no-gutters">
                <Title></Title> 
                <Content></Content>
                <Contact></Contact> 
            </div>
        );
    }
}

export default HomeContainer;
const wrapper = document.getElementById("pagecontent");
wrapper ? ReactDOM.render(<HomeContainer />, wrapper) : false;