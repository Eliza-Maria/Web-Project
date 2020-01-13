
//make notifications appear and disappear
setInterval(function(){ 
    var para = document.createElement("p");
    var node = document.createTextNode("Support us on Patreon at www.Patreon.con/movietheatre");
    para.setAttribute('id', "paragraph");
    para.appendChild(node);

    var element = document.getElementById("notification");
    element.appendChild(para);

    setTimeout(function(){  
    var element = document.getElementById("paragraph");
    element.parentNode.removeChild(element); 
  }, 6000);

   }, 12000);

  ///ajax
  
  var button = document.getElementById("submit-button");
  
  button.addEventListener("click", function(){

    // var parsedResponse = null;

$.ajax({
          url:"http://api.myjson.com/bins/10aeze",
          type:"GET",
          success: function(data){
            console.log(data);

            const form =
            {
                 username: document.getElementById('username').value,
                 password: document.getElementById('password').value
            };

            data.forEach(function(element){
              if(element.username==form.username && element.password==form.password)
              {
                alert(exista);
                location.href="index.html";
              }
              });
         },
          error: function(e)
          {
            console.log(e);
          }
        });

   

    // $.get("https://api.myjson.com/bins/10aeze")
    // .done(function(response) {
    //     console.log( "s-a terminat cu bine",response);
    // parsedResponse=response;
    // })
    // .fail(function(error) {
    //     console.log( "error",error);
    // })
    // .always(function() {
    //     console.log( "Always" );
    // });
      
  });


  // function addloggedUserToNavBar(username)
  // {

  //   var listElem1 = document.createElement("ul");
  //   var node = document.createTextNode(username);
  //   listElem1.setAttribute('id', "logged-user");
  //   listElem1.appendChild(node);

  //   var listElem2 = document.createElement("ul");
  //   var button = document.createElement("button");
  //   var node = document.createTextNode("Log Out");
  //   button.setAttribute('id', "loggout-button");
  //   button.appendChild(node);
  //   listElem2.appendChild(button);

  //   var logList = document.createElement("li");
  //   logList.appendChild(listElem1);
  //   logList.appendChild(listElem2);

  //   var element = document.getElementById("upper-nav-list");
  //   element.appendChild(logList);

  // }