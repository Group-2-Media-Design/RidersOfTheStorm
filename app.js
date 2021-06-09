const setupGuides = (data) => {
    // set up
    let html = "";
    data.forEach(doc => {
        const guide = doc.data()
        console.log(guide);
    })
}
const setupUI = (user) => {
    if (user) {
        // document.location.href = './homepage.html'
        location.href = "./homepage.html"
    }
}

