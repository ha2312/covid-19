
function fValidate()
{
  var username= document.getElementById("uname");
  var password= document.getElementById("pass");

  if (username.value ==""||password.value =="") 
  {
      alert("Please fill all inputs_____!");
      return false;
     
  }
  else
  { 
      true;
  }
}
