// Call the function every second
setInterval(currentTime, 1000);

// Current time function 
function currentTime() {
    console.log("in the function");
    // Get current time
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    // Format the time (add leading zeros if needed)
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    // Display time in the "clock" element
    document.getElementById("clock").innerHTML = `${hour}:${min}:${sec}`;
}

// Initial call to set the time immediately
currentTime();
