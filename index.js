const tab1 =document.querySelector('.tab1');
const tab2 =document.querySelector('.tab2');
const tab3 =document.querySelector('.tab3');


tab1.addEventListener('click',()=>{
    tab1.classList.add('active');
    tab2.classList.remove('active');
    tab3.classList.remove('active');
});

tab2.addEventListener('click',()=>{
    tab2.classList.add('active');
    tab1.classList.remove('active');
    tab3.classList.remove('active');
}); 
tab3.addEventListener('click',()=>{
    tab3.classList.add('active');
    tab1.classList.remove('active');
    tab2.classList.remove('active');
});


const from = document.getElementById("fromCity");
const to = document.getElementById("toCity");
const swapbtn = document.getElementById("swapbtn");


swapbtn.addEventListener("click", function () {
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
});


const depIcon = document.getElementById("depIcon");
const retIcon = document.getElementById("retIcon");
const depDate = document.getElementById("depDate");
const retDate = document.getElementById("retDate");
const depText = document.getElementById("depText");
const retText = document.getElementById("retText");


depIcon.addEventListener("click", function () {
  if (depDate.showPicker) depDate.showPicker();
  else depDate.click();
});

retIcon.addEventListener("click", function () {
  if (retDate.showPicker) retDate.showPicker();
  else retDate.click();
});


depDate.addEventListener("change", function () {
  depText.textContent = depDate.value || "Departure date";
});

retDate.addEventListener("change", function () {
  retText.textContent = retDate.value || "Return date";
});

const trackToggle = document.getElementById("trackToggle");

trackToggle.addEventListener("change", () => {
  if (trackToggle.checked) {
    console.log("Track prices: ON");
  } else {
    console.log("Track prices: OFF");
  }
});

const paymentDropdown = document.querySelector('.payment-dropdown');
const paymentOptions = document.querySelector('.payment-options');
const dropdownIcon = paymentDropdown.querySelector('i');

paymentDropdown.addEventListener("click", () => {
    if (paymentOptions.style.display === "block") {
        paymentOptions.style.display = "none";
        dropdownIcon.classList.remove("fa-chevron-up");
        dropdownIcon.classList.add("fa-chevron-down");
    } else {
        paymentOptions.style.display = "block";
        dropdownIcon.classList.remove("fa-chevron-down");
        dropdownIcon.classList.add("fa-chevron-up");
    }
});
const timeTabs = document.querySelectorAll('.time-tab');

timeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        timeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});


const flightCards = document.querySelectorAll('.flight-card');

flightCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedCards = document.querySelectorAll('.flight-card.selected');

        
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
            return;
        }

        
        if (selectedCards.length < 2) {
            card.classList.add('selected');
        } else {
            console.log('You can select only 2 flights');
        }
    });
});



