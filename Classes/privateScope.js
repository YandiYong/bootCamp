function person(fName, lName){

    let firstName = fName;
    let lastName = lName;
    
    //Using let declare the function as a private
    let getDetails_NoAccess = function(){

        return (`First Name: ${firstName} \n Last Name: ${lastName}`)

    }

    this.getDetails_Access = function(){

        return (`First Name: ${firstName} \n Last Name: ${lastName}`)

    }
}
let person1 = new person('Yaya','Toure');
console.log(person1.firstName)
console.log(person1.getDetails_NoAccess)
console.log(person1.getDetails_Access())