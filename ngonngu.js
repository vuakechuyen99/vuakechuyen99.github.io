var firstCol = ["b", "c", "d", "đ", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "ch", "gh", "kh", "ng", "ngh", "nh", "ph", "th", "tr", "gi", "qu", "", ""];
secondCol = ["a", "ă", "â", "e", "ê", "i", "o", "ô", "ơ", "u", "ư", "y", "oa", "oe", "uy", "uê"]
thirdCol = ["c", "m", "n", "t", "ch", "ng", "nh", ""]

topbot = ["•", "\\", "/", "?", "~", "", "", "", ""]


//lấy ele
function setupBegin(viewName, inputName) {

    elesView = document.getElementsByClassName(viewName)

    elesInput = document.getElementsByClassName(inputName)
}


function ran(lengthCol, number) {
    var x = 100;
    while (x > lengthCol) {
        x = Math.round(Math.random()*number);
    }
    return x;
}

function changeFirst() {
    elesView[1].innerText = (firstCol[ran(firstCol.length-1, 100)])
}
function changeSecond() {
    elesView[2].innerText = secondCol[ran(secondCol.length-1, 100)];
    var cache = ran(topbot.length-1, 10)
    if (cache >= 1) {
        elesView[0].innerText = topbot[cache];
        elesView[4].innerText = "";
    } else {
        elesView[4].innerText = topbot[0];
        elesView[0].innerText = "";
    }

}

function changeThird() {
    elesView[3].innerText = thirdCol[ran(thirdCol.length-1, 10)]
}

function changeAll() {
    changeFirst();
    changeSecond();
    changeThird();

}




function show(va) {
    elesInput[0].onclick = function() {
        changeFirst();
    }
    elesInput[1].onclick = function() {
        changeSecond();
    }
    elesInput[2].onclick = function() {
        changeThird();
    }
    elesInput[3].onclick = function() {
        changeAll();
    }

}
var test1 = document.getElementById("view-com1");
test2 = document.getElementById("view-com2");
var kt = false;
test1.onclick = function() {
    setupBegin("view1-box", "butt-left");
    show()
}
test2.onclick = function() {
    setupBegin("view2-box", "butt-right");
    show()
}




var slides=document.getElementsByClassName("slides");
var l=0;
slides[0].style.display="block";
function showSlide(){
    l++;
    if(l==slides.length){l=0;
    slides[slides.length-1].style.display="none";
    }
    slides[l].style.display="block";
    slides[l-1].style.display="none";
    
}
setInterval(showSlide,3000);