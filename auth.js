// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if(user) {
        db.collection('students').get().then(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
    })

    } else {
        setupUI()
        setupGuides([])
        console.log("User is logged out");
    }
});

// Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
    });
});



