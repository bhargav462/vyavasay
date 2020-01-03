var cropForm = function(){
    var Name = $("input[name='name']").val();
    var AadharNo = $("input[name='aadhar']").val();
    var CropArea = $("input[name='cropArea']").val();
    var phoneNo = $("input[name='phone']").val();
    var soilType = $("select[name='soil']").val();
    var previousCrop = $("select[name='pre']").val();
    var nutritionContent = $("select[name='Nutrients']").val();
    var waterAvailability = $("input[name='water']").val();
    var cropSeason = $("select[name='season']").val();
    var biometricId = $("input[name='biometric']").val();
    $.post('/crop',{Name,AadharNo,CropArea,phoneNo,soilType,previousCrop,nutritionContent,waterAvailability,cropSeason,biometricId},function(res,status){
      if(res)
      {

        if(previousCrop === "not")
        {
            previousCrop = "Not Available";
        }
          console.log('res',res);
          alert(res);

          var table = document.getElementById("res");

          table.innerHTML = "<table>" +
          "<tr><td>Farmer Name</td>" +
            "<td>" + Name + "</td></tr>" +
          "<tr><td>Soil Type</td>" +
            "<td>" + soilType + "</td></tr>" +
          "<tr><td>Nutrition Content</td>" +
            "<td>" + nutritionContent + "</td></tr>" +
          "<tr><td>Previous Crop</td>" +
            "<td>" + previousCrop + "</td></tr>" +
          "<tr><td>Crop Season</td>" +
            "<td>" + cropSeason + "</td></tr>" +
          "<tr><td>Next Crop</td>" +
           "<td>" + res + "</td></tr>" +
        "</table>";
          
        //   var node = document.createElement("LI");
        //   var textnode = document.createTextNode("Water");
        //   node.appendChild(textnode);
        //   document.getElementById("res").appendChild(node);

        //   var node = document.createElement("LI");
        //   var textnode = document.createTextNode("Water");


      }else{
          console.log('res',res);
          alert("Unsuccessful attempt");
      }
    });
}
    

