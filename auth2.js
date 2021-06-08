
// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if(user) {
        db.collection('students').doc("szt6JeBvt0lln0Djn2hD").collection("Free").get().then(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user)
    });
    } else {
        // setupUI()
        setupGuides([])
        console.log("User is logged out");
    }
});



const Log_out = document.getElementById('zero');
Log_out.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("YA boy!");
        document.location.href = './LoginPage.html'
    })
});
