var SERVER_URL = "http://ec2-54-201-43-180.us-west-2.compute.amazonaws.com:3000"
function getData() {
  var username =  document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  var adminAccess = {
    "username": username,
    "password": password
  }
  
  $.post(SERVER_URL + "/login", adminAccess,function(data){
    
    if(data != null){
      
      document.location.href = "index.html";
    }
    
  }).fail(function(error) {
    alert(error.responseText);
  });
}