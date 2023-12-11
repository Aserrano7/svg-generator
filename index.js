const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    
    {
        type: "input",
        name: "name",
        message: "Enter text for the logo. (Must not be more than 3 characters.)",
    },
    {
        type: "input",
        name: " text-color",
        message: "Enter a text color",
    },

    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo",
        choices: [
            "circle",
            "square",
            "triangle", 
        ]
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a shape color",
    },
];

class SVG{
    constructor(){
        this.text1 ='';
        this.shape1 ='';
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape1}${this.text1}</svg>`;
    }
    setText(text,color){
        this.text1=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shape1 = shape.render();
    }

}
