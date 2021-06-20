class Calculator{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    add(){
        return this.num1 + this.num2;
    }
}

let calc = new Calculator(23,10);

console.log(calc);
console.log(calc.add());

//Constructor Function
function User(name){
    this.name = name;
}
User.prototype.args = function(args){
    

    if(args === 'object'){
        this.args = args;
    }
}
User.prototype.showName = function(){
    console.log("Name is: " + this.name);
}

let myUser = new User("Saiful Islam");
// myUser.args = {
//     age: 35,
//     designation: 'Programmer',
//     address: 'Rajshahi, Bangladesh',
//     speciality: "WordPress."
// };
myUser.args({
    age: 35,
    designation: 'Programmer',
    address: 'Rajshahi, Bangladesh',
    speciality: "WordPress."
});

console.log(myUser);