function main () {
    setTimeout(function() {
        window.history.back();
        //window.location.reload(true);
    }, 10000);
}

$(document).ready(main);