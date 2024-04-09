function talk(){
    //This is a JSON variable
    var know = {
        "Hello" : " Hi there &#128540",
         "Who are you" : "MY name is Yandiswa",
         "How are you" : "Iam good :-",
         "What can I do for you" : "Please give us a follow and a like below",
         "Your followers?" : "I don't have followers yet",
         "Okay" : "Thanks for your convo",
         "Bye" : "See you soon"
    }

    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "</br>";


    if(user in know){

        document.getElementById('chatLog').innerHTML = know[user] + "</br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Soryy I dont understand </br>";
    }

}