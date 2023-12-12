const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');
const questions = [

    {
        type: "input",
        name: "name",
        message: "Enter text for the logo. (Must not be more than 3 characters.)",
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "Enter a shape color",
    },
];

class SVG {
    constructor() {
        this.text1 = '';
        this.shape1 = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape1}${this.text1}</svg>`;
    }
    setText(text, color) {
        this.text1 = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shape1 = shape.render();
    }

}

function init() {
    inquirer.prompt(questions).then((data) => {
         
            let userShape;
            switch (data.shape) {
                
                case "square":
                    userShape = new Square();
                    break;

                case "circle":
                    userShape = new Circle();
                    break;

                case "triangle":
                    userShape = new Triangle();
                    break;

                default:
                    console.log("Invalid shape!");
            }
            let textLogo = data.name;
            let userColor = data.textColor;
            let svgColor = data.shapeColor;
            const svg = new SVG();
            userShape.setColor(svgColor);
            svg.setText(textLogo, userColor);
            svg.setShape(userShape);
          
            fs.writeFile("logo.svg", svg.render(), (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                } else {
                    console.log("Logo successfully created!");
                }
            });

        })
}
init();
