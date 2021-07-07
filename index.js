async function sleep(options) {

    let timeformat = options.time_format.toLowerCase()
    let ms = options.time
    let timeformatted;

    // Seconds
    let secondaliases = ['seconds', 'sec', 's']
    if(secondaliases.includes(timeformat)) timeformatted = ms * 1000

    // Minutes
    let minutealiases = ['minutes', 'min', 'm']
    if(minutealiases.includes(timeformat)) timeformatted = ms * 60000

    // Hours
    let houraliases = ['hours', 'h']
    if(houraliases.includes(timeformat)) timeformatted = ms * 3600000

    // Wait <timeformatted> milliseconds
    var now = new Date().getTime();
    while(new Date().getTime() < now + timeformatted){}
}

module.exports.sleep = sleep;
