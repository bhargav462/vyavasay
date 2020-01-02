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
      if(res === "done")
      {
          alert("Data was successfully added");
      }else{
          alert("Unsuccessful attempt");
      }
    });
}
    

