const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/template');
const MyTeam = require('./src/save-file');
const inquirer = require('inquirer');

const addEmployee = teamMembers => {
    if(!teamMembers){
        teamMembers = [];
    };
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: "Please enter Employee's Name",
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log("Please enter the Employee's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter Employee's Id",
        validate: idInput => {
            if(idInput){
                return true;
            } else {
                console.log("Please enter the Employee's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter Employee's Email",
        validate: emailInput => {
            if(emailInput){
                return true;
            } else {
                console.log("Please enter the Employee's Email!");
                return false;
            }
        }
    }, 
    {
        type: 'list',
        name: 'role',
        message: "Please enter Employee's Role",
        choices: ['Manager', 'Engineer', 'Intern'],
        validate: rolInput => {
            if(roleInput){
                return true;
            } else {
                console.log("Please enter the Employee's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office_number',
        message: "Please enter the Manager's office number",
        validate: officenumberInput => {
            if(officenumberInput){
                return true;
            } else {
                console.log("Please enter the Manager's office number!");
                return false;
            }
        },
        when: ({role}) => {
            if(role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineer's Github Username",
        validate: githubInput => {
            if(githubInput){
                return true;
            } else {
                console.log("Please enter the Engineer's Github Username!");
                return false;
            }
        },
        when: ({role}) => {
            if(role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the Intern's School",
        validate: schoolInput => {
            if(schoolInput){
                return true;
            } else {
                console.log("Please enter the Intern's School!");
                return false;
            }
        },
        when: ({role}) => {
            if(role === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'add_another',
        message: 'Would you like to add another employee?',
        default: false
    },       
])
    .then(response => {
        teamMembers.push(response);
        if(response.add_another)
        {
          return addEmployee(teamMembers);
        }
        else {
            return teamMembers;
        }
    }); //prompt
}; //function

let generateObject = employees => {
    return new Promise ((resolve, reject) => {
        let employee_array = [];
        for(let i = 0; i < employees.length; i++) {
           const {name, id, email, role} = employees[i];
         switch (employees[i].role) {
            case 'Manager':
              const {office_number} = employees[i];               
                let manager = new Manager(name, id, email, office_number);
                employee_array.push(manager);
                break;
            case 'Engineer':
               const {github} = employees[i];               
                let engineer = new Engineer(name, id, email, github);
                employee_array.push(engineer);
                break;
            case 'Intern':
               const {school} = employees[i];               
                let intern = new Intern(name, id, email, school);
                employee_array.push(intern);
                break;
         }   
        }
        resolve(employee_array);
        reject('Cannot create Objects');
    });
}

addEmployee()
.then(generateObject)
.then(template)
.then(MyTeam.writeFile)
.then(MyTeam.copyCSS);
