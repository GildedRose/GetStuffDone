var tasks = {};

// Display today's date
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
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
    // create a new text area to replace this
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
  });

var loadTasks = function() {
    // if localStorage empty assign hour and text key value pairs to tasks
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = {
            "row-9": "Activity",
            "row-10": "Activity",
            "row-11": "Activity",
            "row-12": "Activity",
            "row-13": "Activity",
            "row-14": "Activity",
            "row-15": "Acitvity",
            "row-16": "Activity",
            "row-17": "Acitvity"
        };
    }
    // Populate existing time slots
    var i;

    for(i=9; i<18; i++){
        var roWords = tasks["row-" + i]
        $("#tsk-" + i).children("p").text(roWords);
    }
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// On click save button to save to local storage
$(".saveBtn").on("click", function() {
    var temp = $(".activity").children("textarea").val();
    var para = $("<p>")
        .text(temp)
    $(".activity").children("textarea").replaceWith(para);
    var rowId = $(this).parent().parent().attr('id');
    tasks[rowId]= temp;
    saveTasks();

});

loadTasks();