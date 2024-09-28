
const init = (): void => {

    let clock;

    // Grab the current date
    const currentDate = new Date();

    // Target future date (local time in Australia/Sydney)
    const targetDate = new Date("2024-10-01T00:00:00+10:00").getTime();

    // Calculate the difference in seconds between the future and current date
    const diff = Math.floor((targetDate - currentDate.getTime()) / 1000);

    if (diff <= 0) {
        // If remaining countdown is 0
        clock = new FlipClock(document.querySelector(".clock"), 0, {
            clockFace: "DailyCounter",
            countdown: true,
            autoStart: false
        });
        console.log("Date has already passed!");
    } else {
        // Run countdown timer
        clock = new FlipClock(document.querySelector(".clock"), diff, {
            clockFace: "DailyCounter",
            countdown: true,
            autoStart: true,
            callbacks: {
                stop: () => {
                    console.log("Timer has ended!");
                }
            }
        });

        // Check when timer reaches 0, then stop at 0
        const checkTime = () => {
            const t = clock.time;
            if (t <= 0) {
                clock.time =0;
            } else {
                setTimeout(checkTime, 1000);
            }
        };

        setTimeout(checkTime, 1000);
    }
};

init();
