function registerUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      window.location = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}
function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}
