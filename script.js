//togle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section 
let sections=document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top< offset+height){
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeat on scroll use this
        sec.classList.remove('show-animate');
    });

    //sticky header
    let header= document.querySelector('header');
    

    header.classList.toggle('sticky',window.scrollY > 100);

    //remove  toggle  icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

const form = document.querySelector('form');
const fullName= document.getElementById('name');
const email= document.getElementById('email');
const phone= document.getElementById('phone');
const subject= document.getElementById('subject');
const mess= document.getElementById('message');

function sendEmail() {
    const bodyMessage= `Full name: ${fullName.value}<br> Email: ${email.value} <br> Phone Numer: ${phone.value} <br> Subject: ${subject.value} <br> Message: ${mess.value}`;

    Email.send({
        SecureToken:"08dd922e-7846-415a-8b20-294971d28669",
        // Host : "smtp.elasticemail.com",
       
        To : 'rahulchauhantrambak@gmail.com',
        From : "rahulchauhantrambak@gmail.com",
        Subject :subject.value,
        Body : bodyMessage,
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent succesfully!",
                icon: "success"
              });
              
        }
      }
    );
}

// function checkInputs() {
//     const item = document.querySelectorAll(".item");

//     for(const item of item){
//         if(item.value==""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//         item.addEventListener("keyup", () => {
//             if(item.value != ""){
//                 item.classList.remove("error");
//             item.parentElement.classList.remove("error");
//             }else{
//                 item.classList.add("error");
//             item.parentElement.classList.add("error");
//             }
//         })
//     }
// }

// function checkEmail(){
//     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if(!email.value.match(emailRegex)) {
//         email.classList.add("error");
//         email.parentElement.classList.add("error");
//     }else{
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // checkInputsets();

    sendEmail();
})