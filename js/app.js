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
