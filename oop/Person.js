const Person = {
    firstName: "Yandiswa",

    get getFname(){
        return this.firstName;
    },

    set setName(newPerson){
         this.firstName = newPerson;
    }
    
}
Person.setName = "Grace";
console.log(Person.firstName);
console.log(Person.getFname);