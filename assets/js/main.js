function customJS() {
  "use strict";

  // Selector Function
  const $ = (selector, areAll) => areAll ? document.querySelectorAll(selector) :  document.querySelector(selector);

  var formWrapsignupLogin = $('.form-wrap.signup-login');
  var formWrapLogin = $('.form-wrap.login');
  var formWrapSignup = $('.form-wrap.signup'); 
 

  var loginBtn = $('.login-btn');
  var signupBtn = $('.signup-btn');
  var signupNextBtn = $('.signup-next-btn');
  
  signupBtn.addEventListener('click',function(e) {
    formWrapsignupLogin.style.display = 'none';
    formWrapSignup.style.display = 'block';

    e.preventDefault();
  });
  signupNextBtn.addEventListener('click',function(e) {
    $('.signup input[type=email]').style.display = 'none';
    $('.signup input[type=password]',true).forEach(function(pass) {
      pass.style.display = 'none';
    });
    this.style.display = 'none';

    $('.signup input[type="date"]').style.display = 'block';
    $('.signup button[type="submit"]').style.display = 'block';

    // formWrapSignup.style.display = 'none'; 
    e.preventDefault();
  });

  loginBtn.addEventListener('click',function(e) {
    formWrapsignupLogin.style.display = 'none';
    formWrapLogin.style.display = 'block';
    e.preventDefault();
  });


}
document.addEventListener('DOMContentLoaded', customJS);