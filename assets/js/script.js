// Display today's date
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);
$('#currentDay').append(now);

//time loop
var i;

for(i=9; i< 18; i++){
    var timeslot = ".row-" + i;
    var hr = moment(i, "HH");

    $(timeslot).append(hr.format('h:mm'));

    var delta = hr.diff(moment().startOf('hour'));
    var row = "#row-" + i;
    if (delta > 0){
        $(row).addClass("future")
    }
    else if (delta < 0){
        $(row).addClass("past")
    }
    else {
        $(row).addClass("present")
    }
}

// On click edit activity text
$(".activity").on("click", "p", function() {
    // get current text
    var text = $(this)
        .text()
        .trim();
    console.log(text)
    // create a new text area to replace this
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
  });

// On click save button to save to local storage
$(".saveBtn").on("click", function() {
    var temp = $(".activity").children("textarea").val();
    console.log(temp);
    var para = $("<p>")
        .text(temp)
    console.log(para)
    $(".activity").children("textarea").replaceWith(para);
});