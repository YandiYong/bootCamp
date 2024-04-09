let school = {
   
    name: "Umqhele Secondary",
    established: "1994",
    location: "Tembisa",
    learners: 280,
 
    disPlayInfo: function (){
    
     console.log(`The school name is: ${school.name} \n Locatated at : ${school.location} \nIt is esstablished in ${school.established} with ${school.learners} number of learners. `)

  },
  notationData: function(){
    
    console.log("The name of the school is "+ school['name'])

  }
}


school.disPlayInfo();
school.notationData()
