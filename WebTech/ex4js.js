const users = {
    bobbilibharath: "liverpool",
};

document.getElementById("signin-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-form").reportValidity();

    if (document.getElementById("login-form").checkValidity()) {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        if (Object.keys(users).includes(username)) {
            if (Object.values(users).includes(password)) {
                return alert("Login success!");
            }
            return alert("Incorrect password!");
        }

        alert("Login failed!");
    }
});

document.getElementById("signup-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("signup-form").reportValidity();

    if (document.getElementById("signup-form").checkValidity()) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (Object.keys(users).includes(username)) {
            return alert("User already exists!");
        }

        users[username] = password;
        alert("User added!");
    }
});
