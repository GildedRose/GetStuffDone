// Display today's date
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);
$('#currentDay').append(now);

//time loop
var i;

for(i=9; i< 18; i++){
    var temp = ".row-" + i;
    var hr = moment(i, "HH");

    $(temp).append(hr.format('h:mm'));

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
