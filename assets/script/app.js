window.addEventListener('load', function () {

    // Variables
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timerUpdate = null;
    // Dom Elements
    let hoursEl = document.querySelector('.hours');
    let minutesEl = document.querySelector('.minutes');
    let secondsEl = document.querySelector('.seconds');
    // Buttons
    let timerStart = document.querySelector('.js-timer-start');
    let timerPause = document.querySelector('.js-timer-pause');
    let timerReset = document.querySelector('.js-timer-reset');


    function timerInitialize() {
        seconds += 1;
        if (seconds == 60) {
            seconds = 0;
            minutes += 1;
            if (minutes == 60) {
                seconds = 0;
                minutes = 0;
                hours += 1;
            }
        }
        seconds < 10 ? secondsEl.textContent = "0" + seconds : secondsEl.textContent = seconds;
        minutes < 10 ? minutesEl.textContent = "0" + minutes : minutesEl.textContent = minutes;
        hours < 10 ? hoursEl.textContent = "0" + hours : hoursEl.textContent = hours;
    }

    // Start Timer
    timerStart.addEventListener('click', function (event) {
        if (timerUpdate !== null) {
            clearInterval(timerUpdate);
        }
        event.target.classList.add('disabled');
        timerUpdate = setInterval(function () {
            timerInitialize();
        }, 1000);
    });

    // Pause Timer
    timerPause.addEventListener('click', function (event) {
        clearInterval(timerUpdate);
        timerStart.classList.remove('disabled')
    });

    // Reset Timer
    timerReset.addEventListener('click', function (event) {
        clearInterval(timerUpdate);
        timerStart.classList.remove('disabled');
        hours = 0;
        minutes = 0;
        seconds = 0;

        seconds < 10 ? secondsEl.textContent = "0" + seconds : secondsEl.textContent = seconds;
        minutes < 10 ? minutesEl.textContent = "0" + minutes : minutesEl.textContent = minutes;
        hours < 10 ? hoursEl.textContent = "0" + hours : hoursEl.textContent = hours;
    });

})