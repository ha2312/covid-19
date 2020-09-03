
function fValidate()
{
  var username= document.getElementById("uname");
  var password= document.getElementById("pass");

  if (username.value ==""||password.value =="") 
  {
      alert("Enter username or passpword!");
      return false;
     
  }
  else
  { 
    alert("Success");
      true;
  }
}
