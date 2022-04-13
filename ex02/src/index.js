// Only change code below this line
const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
function myWeek(days) {
    let week = ['SAT', 'SUN'];
    week = days.concat(...week);
    return week;
} 
// Only change code above this line
console.log(myWeek(workDays));
module.exports = myWeek;
