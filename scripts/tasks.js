
//Time and date
var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;

var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+ap+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);



// localStorage.clear();
// Svaing the lists to local storage 
window.onunload = function saveAll() {

    //Create an array to store the li values
    var toStorage = [];

    var values = document.getElementById("myUL").querySelectorAll('li');
    //Cycle through the li array
    for (var i = 0; i < values.length; i++) {
      console.log(values[i]);
      toStorage.push(values[i].outerHTML);

    }

    console.log(toStorage);
    //Can´t test this on stackoverflow se the jsFiddle link
    localStorage.setItem('items', JSON.stringify(toStorage));
    console.log(localStorage);

  }

window.onload = function loadAll() {

    const storedvalue = JSON.parse(localStorage.getItem('items'));
    console.log(storedvalue);
        //Load your list here
    for (var i = 0; i < storedvalue.length; i++) {
      z = storedvalue[i]
      document.getElementById("myUL").insertAdjacentHTML('beforeend', z);;
    }
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      }
    }

}


// Get the input field
var myInput = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
myInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("addButton").click();
  }
});



// Create a "close" button and append it to each list item
var myNodelist = document.getElementById("myUL").querySelectorAll('li');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById("myUL");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("Please type the name of your task before adding");
  } 
  else {
    if (document.getElementById("myNotes").value !== "") {
        inputValue = inputValue + ",  " + document.getElementById("myNotes").value;
    }

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li)
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myNotes").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
}



