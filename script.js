var document,
    setInterval,
    clearInterval,
    x = 0,
    a,
    b,
    slides = 1;

function dropdown() {
    'use strict';
    var elem = document.getElementById("dropdown");
    function down() {
        if (x === 0) {
            clearInterval(a);
        } else {
            x += 1;
            elem.style.top = x + "px";
        }
    }
    if (x === -80) {
        a = setInterval(down, 1);
    }
}

function dropup() {
    'use strict';
    var elem = document.getElementById("dropdown");
    function up() {
        if (x === -80) {
            clearInterval(b);
        } else {
            x -= 1;
            elem.style.top = x + "px";
        }
    }
    if (x === 0) {
        b = setInterval(up, 1);
    }
}

function overlayOff() {
    'use strict';
    document.getElementById('overlay').style.display = "none";
}

function fadeOut() {
    'use strict';
    var doc = document.getElementById('overlay'),
        a = 0.7,
        x;
    function fade() {
        if (a === 0.2) {
            clearInterval(x);
        } else {
            a -= 0.005;
            doc.style.backgroundColor = "rgba(0, 0, 0," + a + ")";
        }
    }
    x = setInterval(fade, 3);
}

function quote(num) {
    'use strict';
    var doc1 = document.getElementById("q1"),
        doc2 = document.getElementById("q2"),
        doc3 = document.getElementById("q3"),
        z = 0;
    if (num === -1 && slides === 1) {
//        console.log("equal 3");
        slides = 3;
//        console.log(slides);
    } else if (num === 1 && slides === 3) {
//        console.log("equal 1");
        slides = 1;
//        console.log(slides);
    } else if (num === 1) {
//        console.log("+ 1");
        slides += 1;
//        console.log(slides);
    } else if (num === -1) {
//        console.log("- 1");
        slides -= 1;
//        console.log(slides);
    }
    if (slides === 1) {
        doc1.style.left = z + "px";
        doc2.style.left = -100 + "%";
        doc3.style.left = -100 + "%";
    } else if (slides === 2) {
        doc1.style.left = -100 + "%";
        doc2.style.left = z + "px";
        doc3.style.left = -100 + "%";
    } else if (slides === 3) {
        doc1.style.left = -100 + "%";
        doc2.style.left = -100 + "%";
        doc3.style.left = z + "px";
    }
}