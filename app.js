const r = document.querySelector(":root");
const darkbtn = document.querySelector(".darkbtn");
const whitebtn = document.querySelector(".whitebtn");

if (localStorage.getItem("--background-color") != null) {
    r.style.setProperty(
        "--background-color",
        localStorage.getItem("--background-color")
    );
    r.style.setProperty("--dark", localStorage.getItem("--dark"));
    r.style.setProperty("--secondary-color", localStorage.getItem(" #41978a"));

    if (localStorage.getItem("--background-color") == "#181D31") {
        darkbtn.style.display = "none";
        whitebtn.style.display = "block";
    }
}

function darktheme() {
    r.style.setProperty("--background-color", "#181D31");
    r.style.setProperty("--dark", "white");
    r.style.setProperty("--secondary-color", "#41978a");
    localStorage.setItem("--background-color", "#181D31");
    localStorage.setItem("--dark", "white");
    darkbtn.style.display = "none";
    whitebtn.style.display = "block";
}

function whitetheme() {
    r.style.setProperty("--background-color", "white");
    r.style.setProperty("--dark", "black");
    localStorage.setItem("--background-color", "white");
    localStorage.setItem("--dark", "black");
    darkbtn.style.display = "block";
    whitebtn.style.display = "none";
}