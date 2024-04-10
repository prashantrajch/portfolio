// this code is for resposvie menu icon bar
let menu = document.getElementById("menu");
menu.addEventListener("click", function () {
  let nav = document.getElementById("nav");
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

// this code for nav items when click then nav deactive
let navLink = document.querySelectorAll(".navbar li a");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    let nav = document.getElementById("nav");
    menu.classList.toggle("active");
    nav.classList.toggle("active");
  });
});

// this code is for send mail by Emailjs
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
      .then(alert("Email Sent....!"));
  }
}

// this code for read more and less
let readMore = document.querySelectorAll(".read-more");
readMore.forEach((btn,ind) =>
  btn.addEventListener("click", (e) => {
    e.target.previousElementSibling.classList.toggle('active');
    if (readMore[ind].innerText == "Read More") {
      readMore[ind].innerText = "Read Less";
    } else {
      readMore[ind].innerText = "Read More";
    }
  })
);

// this code is use for video section
const closeVideo = document.getElementById("video-close");
const videoBtn = document.querySelectorAll(".video-btn");
const videoSection = document.getElementById("video-section");
const video = document.querySelector('video');

closeVideo.addEventListener("click", () => {
  videoSection.classList.remove("active");
  video.src = '';
});

let videSrc = [
  {
    imgLocation: "assests/Video/Recipe Finder App Video.mp4",
  },
  {
    imgLocation: "assests/Video/Weather App Video.mp4",
  },
  {
    imgLocation: "assests/Video/Todo Video.mp4",
  },
  {
    imgLocation: "assests/Video/Currency Converter App.mp4",
  },
  {
    imgLocation: 'assests/Video/Shopping Cart Videos.mp4'
  }
];

videoBtn.forEach((btn,ind) => {
  btn.addEventListener('click', () => {
    videoSection.classList.add('active');
    video.src = videSrc[ind].imgLocation;
    video.addEventListener('canplay',function() {
      setTimeout(function(){
        video.play();
      },1500)
    })
  })
})


