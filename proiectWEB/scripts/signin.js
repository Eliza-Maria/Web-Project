

const regex_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
var regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&?]).{8,10}$/

var errorMessages = new Array();

document.getElementById('register-button').addEventListener("click", () =>
	{
		//we remove all old error messages from display
		errorList = document.getElementById("registration-errors-list");
		while( errorList.firstChild )
		{
  			errorList.removeChild( errorList.firstChild );
		}

		//our json info
		let x = []
		const form =
		         {
		             username: document.getElementById('username').value,
		             email: document.getElementById('email').value,
		             password: document.getElementById('password').value,
		             country: document.getElementById('country').value,
		             gender: document.querySelector('input[name = "gender"]:checked').value
		         };

		var formString = JSON.stringify(form);

		console.log(form);

		//we verify if the email and the password are correct
		if(regex_email.test(form.email) && regex_password.test(form.password))
		{
			console.log("regex");
			// $.ajax({
   //        url:"http://api.myjson.com/bins/10aeze",
   //        type:"GET",
   //        success: function(data){
   //          console.log(typeof data);
   //          if(Array.isArray(data)){
   //            x = x.concat(data);
   //            x.push(form);
   //            console.log(x);
   //          }
   //          else{
   //            x.push(data);
   //            x.push(form);
   //          }
   //          $.ajax({
   //            url:"http://api.myjson.com/bins/10aeze",
   //            type:"PUT",
   //            data:JSON.stringify(x),
   //            contentType:"application/json; charset=utf-8",
   //            dataType:"json",
   //            success: function(data, textStatus, jqXHR){
   //              console.log(data);

   //              console.log(textStatus);
   //            }
   //          });
   //        },
   //        error: function(e){
   //          console.log(e);
   //        }
   //      });
			// console.log("ok!");

			$.ajax({
            type: "PUT",
            url: "https://api.myjson.com/bins/10aeze",
            contentType:"application/json; charset=utf-8",
            dataType: "json",
            contentType:"application/json; charset=utf-8",
            data: formString,
            success: function (data) {
               alert('Success');
               location.href="index.html";
            },
            error: function (e) {
             console.log(e);
            }
        });
		}
		else 
		{
			//treating the errors
			if(!regex_email.test(form.email))
			{
				errorMessages.push("Wrong email format :(.");
			}

			if(!regex_password.test(form.password))
			{
				errorMessages.push("Password must be at least 8-charasters long, must contain at least one capital, one digit and one special character.");
			}

		}

		while(errorMessages.length > 0)
		{

			var listElem = document.createElement("li");
	    	var node = document.createTextNode(errorMessages.pop());
	    	listElem.setAttribute('class', "registration-errors-item");
	    	listElem.appendChild(node);
	    	errorList = document.getElementById("registration-errors-list");
	    	errorList.appendChild(listElem);
		}


	});


