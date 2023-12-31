// jshint esversion:6
exports.getDate = function() {
const today = new Date;
const currentDay = today.getDay();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

return today.toLocaleDateString("ig-NG", options);
}

exports.getDay = function() {
    const today = new Date;
    const currentDay = today.getDay();
    
    const options = {
        weekday: "long"
    }
    
    return today.toLocaleDateString("ig-NG", options);
    }