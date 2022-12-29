function sayHello(name){
    console.log(name);
}

sayHello("Guille");

let emp = {
    name: "Guille",
    dept: "HR",
    sal: 300000,
    print: function(){
        return ("Return information " + this.name + "\nDept " + this.dept + "\nSal " + this.sal)
    }
}

console.log(emp.print());



