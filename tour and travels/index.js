console.log("sagar paliwal");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validUser = false;

name.addEventListener("blur", () => {
  console.log("name is blurred");

  let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,20}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your name is valid ");

    name.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log(" your name is in-valid");
    name.classList.add("is-invalid");
    validUser = false;
  }
});

phone.addEventListener("blur", () => {
  console.log(" phone number  is blurred");
  let regex = /^[0-9]([0-9]){1,10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your phone number is valid ");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log(" your  phone number  is in-valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

email.addEventListener("blur", () => {
  console.log("email is blurred");
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your  email  is valid ");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log(" your email is in-valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("you clicked  on submit ");
  console.log(validEmail, validUser, validPhone);
  if (validEmail && validUser && validPhone) {
    let failure = document.getElementById("failure");
    console.log("you have submitted all information right");
    let success = document.getElementById("success");
    // success.classList.add('show');
    // danger.classList.remove("show");
    // $('#failure').alert("hide");
    $('#failure').hide();
    $('#success').show();

  } else {
    console.log("you input wrong information ");
    let failure = document.getElementById("failure");
    failure.classList.add('show');
    // success.classList.remove("show")
    // $('#success').alert("hide");
    $('#success').hide();
    $('#failure').show();

  }
});

 