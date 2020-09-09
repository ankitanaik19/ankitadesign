function openForm() {
  document.getElementById("mychat").style.display = "block";
}

function closeForm() {
  document.getElementById("mychat").style.display = "none";
}

function entermsg(){
    var x = document.getElementById("entertext").value;
    document.getElementById("displaymsg").innerHTML = x;
}

