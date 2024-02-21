let menu = document.getElementById('menu');
menu.addEventListener('click', function(){
    let nav = document.getElementById('nav');
    this.classList.toggle('active')
    nav.classList.toggle('active');
})

function sendMail(e) {
    if (
      e.form.name.value != "" &&
      e.form.email.value != "" &&
      e.form.subject.value != "" &&
      e.form.message.value != ""
    ) {
      let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      emailjs
        .send("service_55hgsvw", "template_d1ogy8g", params)
        .then(alert("Email Sent....!"))
    }
  }