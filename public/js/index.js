 
    document.getElementById("button").addEventListener("click",function(){
        document.querySelector(".popup").style.display = "flex";
    });
    
    document.getElementById("Register").addEventListener("click",function(){
        document.querySelector(".popup-reg").style.display = "flex";
    });
    
    document.querySelector(".close").addEventListener("click",function(){
       document.querySelector(".popup").style.display = "none"; 
    });

    document.querySelector(".close-reg").addEventListener("click",function(){
        document.querySelector(".popup-reg").style.display = "none"; 
    });
    

    var check_reg = function() {
        if (document.getElementById('password').value ==
          document.getElementById('confirm_password').value) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'Matching';

          var Name = $("input[name='Name']").val();
          var AadharNo = $("input[name='AadharNo']").val();
          var phoneNo = $("input[name='phoneNo']").val();
          var password = $("input[name='password']").val();

          $.post("/add",{Name,AadharNo,phoneNo,password},function(res,status){
            if(status === "success")
            {
                if(res === "done")
                {
                        document.querySelector(".popup-reg").style.display = "none"; 
                    alert("Data was successfully added");
                }
                else
                alert("Unable to add the data");
            }  else{
                alert("An error has occured");
            }
          });

        } else {
          document.getElementById('message').style.color = 'white';
          document.getElementById('message').innerHTML = 'Please Enter the same Password';
          return false;
        }
      }

      var checkLogin = function()
      {
          var AadharNo = $("input[name='aadhar']").val();
          var password = $("input[name='pass']").val();

          $.post('/check',{AadharNo,password},function(res,status){
              if(res === "No user found")
              {
                  alert(res);
              }else if(status === "success")
             {
                 console.log("user");
                alert("valid credentials");
                document.querySelector(".popup").style.display = "none"; 
            }else{
                alert("Invalid credentials");
             }
          });
      }


// function closePopUp() {
//     alert("Message");
//     document.querySelector(".close").addEventListener("click",function(){
//         document.querySelector(".popup").style.display = "none"; 
//      }); 
// }