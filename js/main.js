const form = document.getElementById("formulaire");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("Email").value;
    const mdp = document.getElementById("Password").value;
    const data = {email, mdp};
    console.log(data);
});