// Display today's date
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);
$('#currentDay').append(now);

//time loop
var i;

for(i=9; i< 18; i++){
    var temp = ".row-" + i;
    $(temp).append(moment(i, "HH").format('h:mm'));
};