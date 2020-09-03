
function fValidate()
{
  var username= document.getElementById("uname");
  var password= document.getElementById("pass");

  if (username.value ==""||password.value =="") 
  {
      alert("Enter Valid Username or Password");
      return false;
     
  }
  else
  { 
      true;
  }
}
