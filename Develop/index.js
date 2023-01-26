const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer =require("./lib/Engineer")


const employed = [];

const todo = () =>{
    inquirer.prompt({
     
        type:"list",
        name:"choose"
        message:"What do you want to do?"
        choices:["Add intern","Add Engineer","Quit"]
    }).then(ans=>{
        if(ans.choose ==="Add intern"){
            addIntern();
            return todo();
        }else if(ans.choose =="add Engineer"){
            addEngineer
        }
    })
}

const addIntern = () => {
    inquirer.prompt({
       {type:"input"
        name:"name"
        message:"What intern name?"
    },
    {
        type:"input"
        name:"id"
        message:"what is intern id?"
    },
    {
        type:"input"
        name:"email"
        message:"what is intern email?"
    },
    {
        type:"input"
        name:"school"
        message:"what is intern school?"
    }
    }).then(ans => {
        const newIntern = new Intern(ans.name, ans.id, ans.email, ans.school)
        employed.push(newIntern);
    })
}

const addManager = () => {
    inquirer.prompt({
       {type:"input"
        name:"name"
        message:"What manager name?"
    },
    {
        type:"input"
        name:"id"
        message:"what is manager id?"
    },
    {
        type:"input"
        name:"email"
        message:"what is manager email?"
    },
    {
        type:"input"
        name:"office"
        message:"what is manager office number??"
    }
    }).then(ans => {
        const newManager = new Manager(ans.name, ans.id, ans.email, ans.office)
        employed.push(newManager);
    })
}

const addEngineer = () => {
    inquirer.prompt({
       {type:"input"
        name:"name"
        message:"What Engineer name?"
    },
    {
        type:"input"
        name:"id"
        message:"what is Engineer id?"
    },
    {
        type:"input"
        name:"email"
        message:"what is Engineer email?"
    },
    {
        type:"input"
        name:"github"
        message:"what is Engineer Github?"
    }
    }).then(ans => {
        const newEngineer = new Engineer(ans.name, ans.id, ans.email, ans.github)
        employed.push(newEngineer);
    })
}