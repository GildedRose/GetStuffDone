// Display today's date
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);
$('#currentDay').append(now);
