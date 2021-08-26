const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
function GenerateEmployeeCard(data) {
    if(!data)
    {
        return "Error no data provided"
    }
    let card_array = [];
    for(let i = 0; i < data.length; i++) {
        const {name, id, email} = data[i];
        switch (data[i].getRole()) {
            case 'Manager':
            const {officeNumber} = data[i];
                card_array.push( ` <div class="card">
                <section class="card-header">
                    <h2>${name}</h2>
                    <div class="subtitle-container">
                        <span id='Manager'></span>
                        <h3>${data[i].getRole()}</h3>
                    </div>
                    <div class="card-content">
                        <ul class="content-list">
                            <li>ID: ${id}</li>
                            <li><a href="mailto:${email}">Email: ${email}</a></li>
                            <li><a href="tel:${officeNumber}">Office Number: ${officeNumber}</a></li>
                        </ul>
                    </div>
                </section>
            </div>`);
            break;
            case 'Engineer':
                const {github} = data[i];
                card_array.push( ` <div class="card">
                <section class="card-header">
                    <h2>${name}</h2>
                    <div class="subtitle-container">
                        <span id='Engineer'></span>
                        <h3>${data[i].getRole()}</h3>
                    </div>
                    <div class="card-content">
                        <ul class="content-list">
                            <li>ID: ${id}</li>
                            <li><a href="mailto:${email}">Email: ${email}</a></li>
                            <li><a href="https://github.com/${github}" target="_blank" rel="noreferrer">Github: ${github} </a></li>
                        </ul>
                    </div>
                </section>
            </div>`);
            break;
            case 'Intern':
                const {school} = data[i];
                card_array.push( ` <div class="card">
                <section class="card-header">
                    <h2>${name}</h2>
                    <div class="subtitle-container">
                        <span id='Intern'></span>
                        <h3>${data[i].getRole()}</h3>
                    </div>
                    <div class="card-content">
                        <ul class="content-list">
                            <li>ID: ${id}</li>
                            <li><a href="mailto:${email}">Email: ${email}</a></li>
                            <li>School: ${school}</li>
                        </ul>
                    </div>
                </section>
            </div>`);
            break;
        }
    }
    return card_array.join('\n');
};

module.exports = Employee_Data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team View</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <div id="team-container">
        ${GenerateEmployeeCard(Employee_Data)}
        </div>
    </main>  
</body>
</html>`
};