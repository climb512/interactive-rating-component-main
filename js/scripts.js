function formHandler() {
    var ele = document.getElementsByName('feedback');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            const val = ele[i].value;
            document.getElementById("rating-state").style.display="none";
            document.getElementById("thank-you-state").style.display="flex";
            document.getElementById("submitted-rating").innerHTML=val;
        }
    }
}