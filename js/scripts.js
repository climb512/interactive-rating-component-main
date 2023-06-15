function formHandler() {
    var ele = document.getElementsByName('feedback');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("rating-state").style.display="none";
            document.getElementById("thank-you-state").style.display="flex";
        }
    }
}