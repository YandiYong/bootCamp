class Vehicle{
  constructor(make,engine,color){
    this.color = color;
    this.engine = engine;
    this.make = make;
  }
  getDetails(){
    return ("The color of the vehicle is "+ this.color)
}
}



let suden = new Vehicle('isuxu','1.3','totyota');

console.log(suden.color)
