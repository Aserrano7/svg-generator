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
