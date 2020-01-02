    document.getElementById("button").addEventListener("click",function(){
        document.querySelector(".popup").style.display = "flex";
    });
    
    document.getElementById("Register").addEventListener("click",function(){
        document.querySelector(".popup").style.display = "flex";
    });
    
    document.querySelector(".close").addEventListener("click",function(){
       document.querySelector(".popup").style.display = "none"; 
    });


// function closePopUp() {
//     alert("Message");
//     document.querySelector(".close").addEventListener("click",function(){
//         document.querySelector(".popup").style.display = "none"; 
//      }); 
// }