class Person{

  constructor(name1, id){

    this.name1 = name1;
    this.id = id;
     
  }

  addAddress(address){
    this.address = address;
 }

 getDetails(){
    console.log(`The name is ${this.name1} with the id of ${this.id} at this addres ${this.address}`)
 }

}

let person1 = new Person('Yandiswa','94');
person1.addAddress('Tembisa');

//Abstraction
person1.getDetails();

//console.log(person1)