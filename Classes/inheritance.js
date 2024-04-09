class Person{

  constructor(fname){

    this.fname = fname; 

  }
  toString(){
    
    return (`The name is: ${this.fname}`)

  }

}
//Inheritance
class Student extends Person{
   
    constructor(fname, id){
      
        //super makes the fname to be initialised from above from the constructor 
        super(fname);
        this.id = id;

    }
    toString(){
   
        return (`${super.toString()}\nStudent id: ${this.id}`)

    }


}

let student1 = new Student('Yaya','1');
console.log(student1)
console.log(student1.toString())