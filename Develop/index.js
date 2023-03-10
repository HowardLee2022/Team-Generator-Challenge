const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer =require("./lib/Engineer");
const fs = require("fs");
const generateHtml = require("./util/generateHtml");


const employed = [];
//Function that let user choose 3 option. Add engineer/Add Inter/Quit
const todo = () =>{
    inquirer.prompt({
     
        type:"list",
        name:"choose",
        message:"What do you want to do?",
        choices:["Add intern","Add Engineer","Quit"]
    }).then(ans=>{
        if(ans.choose ==="Add intern"){
            addIntern();
        }else if(ans.choose ==="Add Engineer"){
            addEngineer();
        }else{
            fs.writeFile("index.html", generateHtml(employed), (err)=> err ? console.log(err):console.log("html file created"));
        }
    })
}
//Function that adds a intern class to the employed array
const addIntern = () => {
    inquirer.prompt([
    {   
        type:"input",
        name:"name",
        message:"What intern name?"
    },
    {
        type:"input",
        name:"id",
        message:"what is intern id?"
    },
    {
        type:"input",
        name:"email",
        message:"what is intern email?"
    },
    {
        type:"input",
        name:"school",
        message:"what is intern school?"
    }
    ]).then(ans => {
        const newIntern = new Intern(ans.name, ans.id, ans.email, ans.school)
        employed.push(newIntern);
        todo()
    })
}
//function that adds manager class to employed array
const addManager = () => {
    inquirer.prompt([
    {   
        type:"input",
        name:"name",
        message:"What the manager name?"
    },
    {
        type:"input",
        name:"id",
        message:"what is the manager id?"
    },
    {
        type:"input",
        name:"email",
        message:"what is the manager email?"
    },
    {
        type:"input",
        name:"office",
        message:"what is the manager office number??"
    }
    ]).then(ans => {
        const newManager = new Manager(ans.name, ans.id, ans.email, ans.office)
        employed.push(newManager); 
        todo();
    })
    
}
//function that adds engineer class to employed array
const addEngineer = () => {
    inquirer.prompt([
    {   
        type:"input",
        name:"name",
        message:"What Engineer name?"
    },
    {
        type:"input",
        name:"id",
        message:"what is Engineer id?"
    },
    {
        type:"input",
        name:"email",
        message:"what is Engineer email?"
    },
    {
        type:"input",
        name:"github",
        message:"what is Engineer Github?"
    }
    ]).then(ans => {
        const newEngineer = new Engineer(ans.name, ans.id, ans.email, ans.github)
        employed.push(newEngineer);
        todo();
    })
    
}
//this starts the application by creating a manager
addManager();