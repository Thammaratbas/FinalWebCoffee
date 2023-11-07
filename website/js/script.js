let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})

var objPeople = [
    {
        username: "Nattapol",
        passsword: "630910319"
    },
    {
        username: "Thammarat",
        passsword: "630910329"
    },
    {
        username: "Tharadol",
        passsword: "630910330"
    },
    {
        username: "Saharat",
        passsword: "630910376"
    },
];

function getInfo(){
    var username = document.getElementById("username").value;
    var passsword = document.getElementById("password").value;

    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && passsword == objPeople[i].passsword){
            console.log(username + " is logged in!");
            alert(username + " is logged in!");
        }
    }
}