var console,
    x = 0,
    a,
    b,
    elem = document.getElementById("dropdown");

function dropdown() {
    'use strict';
    
    function down() {
        if (x === 0) {
            console.log('interval b clear');
            clearInterval(a);
        } else {
            console.log('how about this');
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
    
    function up() {
        if (x === -80) {
            console.log('interval a clear');
            clearInterval(b);
        } else {
            console.log('is this running?!');
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