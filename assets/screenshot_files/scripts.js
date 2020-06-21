$(document).ready(function(){
  $("#design-icon").click(function(){
    $("#design-text").toggle();
    $("#dev-text").hide();
    $("#product-text").hide();
  });
});

$(document).ready(function(){
  $("#dev-icon").click(function(){
    $("#dev-text").toggle();
    $("#design-text").hide();
    $("#product-text").hide();
  });
});

$(document).ready(function(){
  $("#product-icon").click(function(){
    $("#product-text").toggle();
    $("#design-text").hide();
    $("#dev-text").hide();
  });
});

function validation(){
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

    if(name === "" || name == null){
      alert("Name is required");
      return false;
    }

    if(email === "" || email == null){
      alert("Email is required");
      return false;
    }

    if(message === "" || message == null){
      alert("Message is required");
      return false;
    }
    alert(name + "," + " we have received your message. Thank you for reaching out to us.")
    return true;
  }
