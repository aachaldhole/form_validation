function validate() {
  // take all as input fields
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;

  // check this function is executing properly or not
  // console.log(username + email);

  // for checking the conditions following functions send value as parameter
  checkusername(username);
  checkemail(email);
  checkpassword(password);
  checkpasswordmatch(password, cpassword);
}

function checkusername(username) {
  // here is length is >7 , then success cls is applied , if after error correct username applied we have to replace error with success
  //bt initially it is empty only error
  if (username.length > 7) {
    //initially we do not have error and success , so no color will be displayed so add one condition
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("username_error").innerHTML = " ";
  } else {
    document.getElementById("username").classList.add("error"); //if input field is empty, add the cls error then username will chwck the condition and enter valide username then error should change to success
    document.getElementById("username_error").innerText =
      "Username must be 8 letters long";
  }
}

function checkemail(email) {
  if (email.length > 8 && email.includes("@gmail.com")) {
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("email_error").innerHTML = " ";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("email_error").innerText = "Enter valid email";
  }
}

function checkpassword(password) {
  if (password.length > 7 && password.includes(".")) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("password_error").innerHTML = " ";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("password_error").innerText =
      "Password must be 8 letter long and includes .";
  }
}

function checkpasswordmatch(password, cpassword) {
  if (password == cpassword && password != "") {
    document.getElementById("cpassword").classList.add("success");
    document.getElementById("cpassword").classList.replace("error", "success");
    document.getElementById("cpassword_error").innerHTML = " ";
  } else {
    document.getElementById("cpassword").classList.add("error");
    document.getElementById("cpassword_error").innerText =
      "Passwords not match";
  }
}
