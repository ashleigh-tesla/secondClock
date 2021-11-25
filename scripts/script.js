function updateClock() {
    var now = new Date()
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou == 0) {
        hou = 12
    }
    if (hou > 12) {
        hou = hou - 12
        pe = "PM"
    }



    // const number = 5;
    // console.log(number.toString().padStart(2, '0')); // expected output: "05"


    // function padLeadingZeros(num, size) {
    //     var s = num + "";
    //     while (s.length < size) s = "0" + s;
    //     return s;
    // }
    // padLeadingZeros(57, 3); // "057"
    // console.log(padLeadingZeros(57, 3))
    // padLeadingZeros(57, 4); //"0057"
    // console.log(padLeadingZeros(57, 4))


    // ('0' + 11).slice(-2) // '11'
    // ('0' + 4).slice(-2) // '04'


    // String(<number>).padStart(<places>, '0')
    // String(42).padStart(5, '0'); 	// '00042' 

    //change the vars types to string and check if it's 1 or 2 digits
    hou = hou.toString()
    if (hou.length < 2) {
        //prepend a 0 to the string to pad if necessary
        hou = '0' + hou;
    }
    min = min.toString()
    if (min.length < 2) {
        //prepend a 0 to the string to pad if necessary
        min = '0' + min;
    }
    sec = sec.toString()
    if (sec.length < 2) {
        //prepend a 0 to the string to pad if necessary
        sec = '0' + sec;
    }

    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n) {
            return n
        }
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]
    var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe]

    // var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe]

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i]
    }
}

function initClock() {
    updateClock()
    window.setInterval("updateClock()", 1)
}