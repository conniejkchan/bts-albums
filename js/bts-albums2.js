const snowflakeBaby = document.getElementById("snowflakeBaby");
const button = document.getElementById("spring");
const snowflake = document.querySelectorAll(".snowflake");
function winter() {
    snowflake.style.display = "none";
}
button.addEventListener('click',winter);