// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee");
class Manager extends employee{
    constructor(name,id,email,number){
        super(name,id,email)
        this.officeNumber = number
    }

    getRole(){
        return "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports=Manager