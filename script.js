function init() {
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
    var otd = document.getElementById("OTD");
    var movies = ["Balupu","Power","Kick 2","Bengal Tiger","Raja The Great","Touch Chesi Chudu","Nela Ticket","Amar Akbar Anthony"];
    var Rdates = ["2013","2014","2015","2015","2017","2018","2018","2018"]
    var days = [17,14,21,10,18,04,25,18]
    var months = [6,9,8,12,10,2,5,11]
    var ptr = 4;
    otd.innerHTML = (year - Rdates[ptr])+" Years for "+movies[ptr];
}

function redirect(value) {

    if (value === "Data") {
        window.location.href = "/Knowledge.html";

    }
    else if (value === "Fun") {
        window.location.href = "/Fun.html";

    }
    else if (value === "Multi Media") {
        window.location.href = "/Multimedia.html";

    }
    else if (value === "More Options") {
        window.location.href = "/MoreOptions.html";

    }
    else if (value === "Over View") {
        window.location.href = "/profile.html";

    }
    else if (value === 1) {
        window.location.href = "https://rtfhub.blogspot.com/2022/10/dhamaka-in-theaters-from-december-23rd.html";

    }
    else if (value === 2) {
        window.location.href = "https://htmlcolorcodes.com/colors/shades-of-orange/";

    }
    

}

function closedyk(){
    var a = document.getElementById("dyk");
    a.style.display="none";
}

function opendyk(){
    var a = document.getElementById("dyk");
    a.style.display="block";
}




