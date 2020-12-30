var i = 0;

var myVar = setInterval(myTimer, 30);

function myTimer() {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        els[i].querySelector("[aria-label^='Unsubscribe from']").click();

        setTimeout(function() {

            var unSubBtn = document.getElementById("confirm-button").click();

        }, 20);

        setTimeout(function() {

            els[i].parentNode.removeChild(els[i]);

        }, 20);

    }

    i++;

    console.log(i + " unsubscribing process completed!");

    console.log(els.length + " remaining");
    
    console.log("Unsubscriber v2 by JOH")

}
