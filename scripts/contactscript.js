function myFunction() {
if (document.getElementById("name").value == false)
	{alert("Please enter your name");
	document.getElementById("name").style.borderColor="red";
	return false;}
else if (document.getElementById("email").value == false)
	{alert("Please enter your e-mail");
	document.getElementById("email").style.borderColor="red";
	return false;}
else if (document.getElementById("message").value == "")
	{alert("Please include a message");
	document.getElementById("message").style.borderColor="red";
	return false;}
else
	return true;
}