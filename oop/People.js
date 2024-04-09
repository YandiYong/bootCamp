let people = {

  gender: 'female'
}
let person = Object(people)

person.name = "Yandiswa"
person.age = 29
person.nationality = "SA"

for (let key in person){
    console.log(key)
    console.log(person[key])
}
