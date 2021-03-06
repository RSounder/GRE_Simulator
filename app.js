var totalItems = 1;
var startItems = 0;
var currentItemIndex = 1;
var quesNum = document.getElementById("quesNum");
var contentImg = document.getElementById("contentImg");
var folderName = ""; 
var modal = document.getElementById("myModal");
var btn = document.getElementById("aboutBtn");
var span = document.getElementsByClassName("close")[0];

document.getElementById('prev-btn').style.display = 'none';
document.getElementById('next-btn').style.display = 'none';

function getPrevious() {
    if(currentItemIndex > startItems) {
        currentItemIndex--;
        quesNum.innerHTML = 'QUESTION ' + currentItemIndex + ' of ' + totalItems;
        contentImg.src = folderName.value + '/' + currentItemIndex + '.PNG';
    }
    buttonColor();
} 
function getNext() {
    if(currentItemIndex < totalItems) {
        currentItemIndex++;
        quesNum.innerHTML = 'QUESTION ' + currentItemIndex + ' of ' + totalItems;
        contentImg.src = folderName.value + '/' + currentItemIndex + '.PNG';
    }
    buttonColor();
}

function buttonColor() {
    if(currentItemIndex == totalItems) {
        document.getElementById('next-btn').style.backgroundColor = 'gray';
    }
    else {
        document.getElementById('next-btn').style.backgroundColor = 'rgb(51, 95, 144)';
    }

    if(currentItemIndex == startItems) {
        document.getElementById('prev-btn').style.backgroundColor = 'gray';
    }
    else {
        document.getElementById('prev-btn').style.backgroundColor = 'rgb(51, 95, 144)';
    }
}

function startTest() {
    var select = document.getElementById('inputFolderid');
    folderName = select.options[select.selectedIndex];
	
    totalItems = document.getElementById('attemptQues').value;
    startItems = document.getElementById('attemptQuesStart').value;
    currentItemIndex = startItems;
	
    document.getElementById('inputFolderid').style.display = 'none';
    document.getElementById('attemptQuesStart').style.display = 'none';
    document.getElementById('attemptQues').style.display = 'none';
    document.getElementById('start-btn').style.display = 'none';

    document.getElementById('prev-btn').style.display = 'block';
    document.getElementById('prev-btn').style.backgroundColor = 'gray';
    document.getElementById('next-btn').style.display = 'block';
    
    contentImg.src = folderName.value + '/' + currentItemIndex + '.PNG';
    
    var sec = (totalItems - startItems + 1)  * 100,
    countDiv = document.getElementById("timer"),
    secpass,
    countDown = setInterval(function () {
        'use strict';
        secpass();
    }, 1000);

    quesNum.innerHTML = 'QUESTION ' + currentItemIndex + ' of ' + totalItems;

    function secpass() {
        'use strict';
        
        var min     = Math.floor(sec / 60),
            remSec  = sec % 60;
        
        if (remSec < 10) {
            remSec = '0' + remSec;
        }
        if (min < 10) {
            min = '0' + min;
            if (min < 5){
                countDiv.style.color = 'red';
            }
        }

        countDiv.innerHTML = min + ":" + remSec;
        
        if (sec > 0) {
            sec = sec - 1;
        } else {
            clearInterval(countDown);
            countDiv.innerHTML = 'Time Over';
            contentImg.src = 'Assets/finished.png';
	    document.getElementById('prev-btn').style.display = 'none';
	    document.getElementById('next-btn').style.display = 'none';
        }
    }
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
