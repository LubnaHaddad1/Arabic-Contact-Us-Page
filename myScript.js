const form = document.getElementById('Myform');

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var phone = document.getElementById('phone');
var mail = document.getElementById('mail');
var msg = document.getElementById('message');
 
 
 var fnameError = document.getElementById('fname-error');
 var lnameError = document.getElementById('lname-error');
 var phoneError = document.getElementById('phone-error');
 var mailError = document.getElementById('mail-error');
 var msgError = document.getElementById('msg-error');

 

form.addEventListener('submit', (e) => {
  let messages = [];
  
  if (fname.value === '' || fname.value == null){
    messages.push('First Name is required');
    fnameError.innerHTML = "First name is required";
  }

  if((fname.value !== '') && (!fname.value.match(/^[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]*$/))){
    messages.push("Symbols are not allowed");
    fnameError.innerHTML = "Symbols are not allowed";
  }


  if ((fname.value !== '') && (!fname.value.match(/^[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]*$/))){
    messages.push("Symbols are not allowed");
    fnameError.innerHTML = "Symbols are not allowed";
  }

  if ((fname.value !== '') && (fname.value.match(/^[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]*$/))){
    fnameError.innerHTML = "";
  }
 

  if (lname.value === '' || lname.value == null){
    messages.push('Last name is required');
    lnameError.innerHTML = "Last name is required";
  }

  if ((lname.value !== '') && (!lname.value.match(/^[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]*$/))){
    messages.push('Symbols are not allowed');
    lnameError.innerHTML = "Symbols are not allowed";
  }

  if ((lname.value !== '') && (lname.value.match(/^[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]*$/))){
    lnameError.innerHTML = "";
  }
 
  if (phone.value === '' || phone.value == null){
    messages.push('Phone num. is required');
    phoneError.innerHTML = "Phone num. is required";
  }

  if ((phone.value !== '') && (!phone.value.match(/^[0-9]*$/))){
    messages.push('Use numbers only');
    phoneError.innerHTML = "Enter numbers only";
  }

  if ((phone.value !== '') && (phone.value.match(/^[0-9]*$/) && (phone.value.length != 10))){
    messages.push("Number must be 10 digits");
    phoneError.innerHTML = "Number must be 10 digits";
  }

  if ((phone.value !== '') && (phone.value.match(/^[0-9]*$/) && (phone.value.length == 10))){
    phoneError.innerHTML = "";
  }

  if (mail.value === '' || mail.value == null){
    messages.push('Email is required');
    mailError.innerHTML = "Email is required";
  }

  if((mail.value !== '')  && (!mail.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
    messages.push('Invalid Email');
    mailError.innerHTML = "Invalid Email";
  }

  if((mail.value !== '')  && (mail.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
    mailError.innerHTML = "";
  }

  if(msg.value === '' || msg.value === null){
    messages.push('Message is required');
    msgError.innerHTML = ("Message is required");
  }

  if(msg.value !== ''){
    msgError.innterHTML = "";
  }
  
  if (messages.length != 0){
    e.preventDefault();
  }
  
  if(messages.length == 0){
    showAlert();
  }
})



/*
function customAlert() {
  this.render = function(dialog){
      var WinW = window.innerWidth;
      var WinH = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
      dialogbox.style.top = "100px";
      dialogoverlay.style.height = WinH+"px";
      dialogbox.style.left = (WinW/2) - (550 * 0.5)+"px";
      document.getElementById('dialogboxhead').innerHTML = "معلوماتك" + '\n';
      document.getElementById('dialogboxbody').innerHTML = dialog + '\n';
      document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">Ok</button>';

  }
  this.ok = function(){
      document.getElementById('dialogoverlay').style.display = "none";
      document.getElementById('dialogbox').style.display = "none";
  }
}

var Alert = new customAlert();

*/

function showAlert(){
  let firstName = document.getElementById('fname');
  const firstNameData = firstName.value;

  let lastName = document.getElementById('lname');
  const lastNameData = lastName.value;

  let phoneNum = document.getElementById('phone');
  const phoneNumData = phoneNum.value;

  let email = document.getElementById('mail');
  const mailData = email.value;

  let msg = document.getElementById('message');
  const messageData = msg.value;


  alert("Submitted successfully!"+'\n' + 
        "الاسم الأول: " + firstNameData+'\n' +
        "الاسم الثاني: " +lastNameData+'\n' +
        "الهاتف المحمول: " +phoneNumData+ '\n' +
        "البريد الإلكتروني: " +mailData+ '\n' +
        "الرسالة: " +messageData+ '\n'
        );
}


