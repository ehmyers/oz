function main () {
    $("button").click(function(e) {
        console.log("clicked!");
        var inputtedUserId = $("input").val();
        var userUrl = "/users/" + inputtedUserId;
        window.location = userUrl;
    });

    $("input").keypress(function(e) {
        if (e.keyCode === 13) {    // 13 is the enter key
            $("button").click();
        }
    });
    $("input").val("");

    $("form").submit(function(e) {
        e.preventDefault();
        if (("#userId").val().isNumeric()) {
            $("form").submit();
        }
        else {
            alert("User ID needs to be a number.");
        }
    });
}

$(document).ready(main);