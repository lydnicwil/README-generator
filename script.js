// TODO: Include packages needed for this application
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the project?",
                
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }}},

            {
                type: 'input',
                name: 'description',
                message: 'Write a description of your project',
                
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter again');
                        return false;
                    }}},
            {
                type: 'input',
                name: 'install',
                message: 'How do you install the project?',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter again');
                        return false;
                    }}},

            {
                type: 'input',
                name: 'usage',
                message: 'How do you use this app?',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter again');
                        return false;
                    }}},

            {
                type: 'list',
                name: 'license',
                message: 'What license does your application have?',
                choices: ['MIT', 'GNU', 'ISC', 'APACHE'],

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please select an option');
                        return false;
                    }}},

            {
                type: 'input',
                name: 'contribute',
                message: 'Enter guidelines for contributing to this application:',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }}},
            {
                type: 'input',
                name: 'test',
                message: 'What command should be used to run tests?',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }}},])
            };
