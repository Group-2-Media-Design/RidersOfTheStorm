const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
}

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
      day_element.setAttribute('id', 'picked');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}

// HELPER FUNCTIONS
function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}

// Listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user) {
      db.collection('students').doc("szt6JeBvt0lln0Djn2hD").collection("Free").get().then(snapshot => {
      setupGuides(snapshot.docs);
      setupUI(user);
  });
  } else {
      setupUI();
      // setupUI()
      setupGuides([])
      console.log("User is logged out");
  }
});

const setupGuides = (data) => {
  let html = "";
  data.forEach(doc => {
      const guide = doc.data()
      console.log(guide);
  })
}
const standard_select = document.querySelector('.room_standard');
const sendingCalendarButton = document.getElementById('calendarButton');
const addForm = document.getElementById('addForm');
const people_standard = document.querySelector('.people-standard');
const time_selected = document.querySelector('.time-selected');
const day_selected = document.getElementById('picked');
const month_selected = document.querySelector('.mth')
// const room_selected = standard_select.value;
const selected_date = document.querySelector('.selected-date');
// const option = document.createElement('option');
const finalDate = selected_date.innerHTML;


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
// db.collection('students').doc("szt6JeBvt0lln0Djn2hD").collection("Free").doc("dJNtCidWoFivGGdbS9q1").get().then(doc => {
//   var array = doc.data().room;
//   array.forEach(item => {
//     var option = document.createElement('option');
//    option.textContent = item;
//    standard_select.appendChild(option);
//    console.log(item);
//    if(standard_select != "") {
//     sendingCalendarButton.addEventListener('click', (e) => {
//       e.preventDefault()
//       db.collection('students').doc("szt6JeBvt0lln0Djn2hD").collection("Occupied").add({
//         room: option.textContent,
//       });
//     });
//    }
//   })
// })

function test() {
  db.collection('students').doc("szt6JeBvt0lln0Djn2hD").collection("Free").doc("dJNtCidWoFivGGdbS9q1").get().then(doc => {
    var array = doc.data().room;
      array.forEach(item => {
        const option = document.createElement('option');
       option.textContent = item;
       standard_select.appendChild(option);
       return standard_select
      })
  })
}

const setupUI = (user) => {
  if (user) {
    test();
      if(standard_select != "") {
       sendingCalendarButton.addEventListener('click', (e) => {
         e.preventDefault()
         db.collection('students').doc("szt6JeBvt0lln0Djn2hD").collection("Occupied").add({
          //  room: option.textContent,
           people: people_standard.value,
           time: time_selected.value,
           date: finalDate,
           room: `${standard_select.value}`,
         })
       })
      }
    }
  }
