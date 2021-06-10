const picked_building = document.getElementById('picked-building');
const picked_floor = document.getElementById('picked-floor');
const picked_room = document.getElementById('picked-room');
const picked_date = document.getElementById('picked-date');


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
        document.location.href = '../LoginPage.html'
    })
});

const setupGuides = (data) => {
    let html = "";
    data.forEach(doc => {
        const guide = doc.data()
        console.log(guide);
    })
  }
  
  const setupUI = (user) => {
    if (user) {
      db.collection('students').doc('szt6JeBvt0lln0Djn2hD').collection('Occupied').get().then((snapshot) => {
        console.log(snapshot.docs);
        })
    }
}

    // db.collection('students').doc('szt6JeBvt0lln0Djn2hD').collection('Occupied').get().then((snapshot) => {
    //     console.log(snapshot.docs);
    // })

    db.collection('students').doc('szt6JeBvt0lln0Djn2hD').collection('Occupied').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            picked_building.innerHTML = "R10";
            picked_floor.innerHTML =  "Second Floor";
            picked_room.innerHTML = doc.data().room;
            let finalTime = `${doc.data().date} ${doc.data().time}  Attandies:${doc.data().people}`
            picked_date.innerHTML = finalTime;
        })
    })
