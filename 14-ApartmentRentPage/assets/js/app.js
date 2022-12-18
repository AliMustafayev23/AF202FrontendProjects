//select room
let lrmini = document.querySelector(".lrmini");
let drmini = document.querySelector(".drmini");
let brmini = document.querySelector(".brmini");
let lrmini2 = document.querySelector(".lr2mini");
let livingroom = document.querySelector(".livingroom");
let diningroom = document.querySelector(".diningroom");
let bedroom = document.querySelector(".bedroom");
let livingroom2 = document.querySelector(".livingroom2");
lrmini.addEventListener("click", function() {
    livingroom.style.display = "block";
    diningroom.style.display = "none";
    bedroom.style.display = "none";
    livingroom2.style.display = "none";
    lrmini.style.opacity = "1";
    drmini.style.opacity = "0.6";
    brmini.style.opacity = "0.6";
    lrmini2.style.opacity = "0.6";
});
drmini.addEventListener("click", function() {
    livingroom.style.display = "none";
    diningroom.style.display = "block";
    bedroom.style.display = "none";
    livingroom2.style.display = "none";
    lrmini.style.opacity = "0.6";
    drmini.style.opacity = "1";
    brmini.style.opacity = "0.6";
    lrmini2.style.opacity = "0.6";
});
brmini.addEventListener("click", function() {
    livingroom.style.display = "none";
    diningroom.style.display = "none";
    bedroom.style.display = "block";
    livingroom2.style.display = "none";
    lrmini.style.opacity = "0.6";
    drmini.style.opacity = "0.6";
    brmini.style.opacity = "1";
    lrmini2.style.opacity = "0.6";
});
lrmini2.addEventListener("click", function() {
    livingroom.style.display = "none";
    diningroom.style.display = "none";
    bedroom.style.display = "none";
    livingroom2.style.display = "block";
    lrmini.style.opacity = "0.6";
    drmini.style.opacity = "0.6";
    brmini.style.opacity = "0.6";
    lrmini2.style.opacity = "1";
});
// search localStorage
let search = document.querySelector(".search");
let checkin = document.querySelector("#checkin");
let checkout = document.querySelector("#checkout");
let adults = document.querySelector("#adults");
let kids = document.querySelector("#kids");
let reserv = JSON.parse(localStorage.getItem("reservation")) || [];
search.addEventListener("click", function(event) {
    event.preventDefault();
    if (
        checkin.value === "" ||
        checkout.value === "" ||
        adults.value === "" ||
        kids.value === ""
    ) {
        alert("Bütün xanalar doldurulamyıb");
    } else {
        let reservation = {
            checkin: "",
            checkout: "",
            adults: "",
            kids: "",
        };

        reservation.checkin = checkin.value;
        reservation.checkout = checkout.value;
        reservation.adults = adults.value;
        reservation.kids = kids.value;
        reserv.push(reservation);
        localStorage.setItem("reservation", JSON.stringify(reserv));
    }
});
//send message
let username = document.querySelector(".name");
let email = document.querySelector(".email");
let message = document.querySelector(".message");
let send = document.querySelector(".send");
let information = JSON.parse(localStorage.getItem("information")) || [];
send.addEventListener("click", function(event) {
    event.preventDefault();
    if (username.value === "" || email.value === "" || message.value === "") {
        alert("Bütün xanalar doldurulamyıb");
    } else {
        let info = {
            name: "",
            email: "",
            adults: "",
        };

        info.name = username.value;
        info.email = email.value;
        info.message = message.value;

        information.push(info);
        username.value = "";
        email.value = "";
        message.value = "";
        localStorage.setItem("information", JSON.stringify(information));
    }
});
//subscribe
let subscribe = document.querySelector(".subscribe");
let subscribe2 = document.querySelector(".subscribe2");
let modal = document.querySelector(".modal");
let email2 = document.querySelector("#email2");
let page = document.querySelector(".page");
let close = document.querySelector(".close");
let subscribe3 = document.querySelector(".sub3");

subscribe.addEventListener("click", function() {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.zindex = 2;
    modal.style.position = "fixed";
    page.style.zindex = -1;
    page.style.opacity = "0.8";
    close.addEventListener("click", function() {
        modal.style.display = "none";
        page.style.opacity = "1";
    });
    let subemail = JSON.parse(localStorage.getItem("email")) || [];
    subscribe2.addEventListener("click", function() {
        if (email2.value == "") {
            alert("Bütün xanalar doldurulamyıb");
        } else {
            let info = {
                email: "",
            };

            info.email = email2.value;

            subemail.push(info);

            localStorage.setItem("email", JSON.stringify(subemail));
        }
    });
});
subscribe3.addEventListener("click", function() {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.zindex = 2;
    modal.style.position = "fixed";
    page.style.zindex = -1;
    page.style.opacity = "0.8";
    close.addEventListener("click", function() {
        modal.style.display = "none";
        page.style.opacity = "1";
    });
    let subemail = JSON.parse(localStorage.getItem("email")) || [];
    subscribe2.addEventListener("click", function() {
        if (email2.value == "") {
            alert("Bütün xanalar doldurulamyıb");
        } else {
            let info = {
                email: "",
            };

            info.email = email2.value;

            subemail.push(info);

            localStorage.setItem("email", JSON.stringify(subemail));
        }
    });
});
//menu
let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
closemenu = document.querySelector(".closemenu");
menu.addEventListener("click", function() {
    nav.style.display = "flex";
    closemenu.style.display = "inline";
    menu.style.display = "none";
});
closemenu.addEventListener("click", function() {
    nav.style.display = "none";
    closemenu.style.display = "none";
    menu.style.display = "inline";
});