export class Timer15s { // to import this class into main.js
    constructor(root) {
        root.innerHTML = Timer15s.getHTML();

        this.el = { // object for holding elements of timer
            minutes: root.querySelector(".timer_part-minutes"),
            seconds: root.querySelector(".timer_part-seconds"),
            control: root.querySelector(".timer_button-control"),
            reset: root.querySelector(".timer_button-reset")
        }

        this.interval = null; // no interval at start (timer isn't running)
        this.remainingSeconds = 15;

        // syntax is addEventListener(type, listener) where type is click and listener is an anonymous function
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.stop();
            this.remainingSeconds = 15;
            this.updateInterfaceTime();
        });
    }

    updateInterfaceTime() { // returns appropriate minutes and seconds
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0"); // pad string with 0s until the string is the given length of 2
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls() { // display play or pause icon
        if (this.interval === null) { // display play icon if timer isn't running
            this.el.control.innerHTML = `<span class="material-icons-round">play_circle</span>`;
            this.el.control.classList.add("timer_button-start"); // add start class to button
            this.el.control.classList.remove("timer_button-stop"); // remove stop class from button
        }
        else { // display pause icon if timer is running
            this.el.control.innerHTML = `<span class="material-icons-round">pause_circle</span>`;
            this.el.control.classList.add("timer_button-stop"); // add stop class to button
            this.el.control.classList.remove("timer_button-start"); // remove start class from button
        }
    }

    start() { // start timer
        if (this.remainingSeconds === 0) return; // stop this method

        this.interval = setInterval(() => { // call this inner function every second (1000 milliseconds)
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) { // stop at 0
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() { // stop timer
        clearInterval(this.interval); // stop the asynchronous setInterval function
        
        // set up to display play icon
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() { // return HTML string from index.html
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
            <button type="button" class="timer_button timer_button-control timer_button-start">
                <span class="material-icons-round">play_circle</span>
            </button>
            <button type="button" class="timer_button timer_button-control timer_button-reset">
                <span class="material-icons-round">replay_circle_filled</span>
            </button>
        `;
    }
}

export class Timer30s { // to import this class into main.js
    constructor(root) {
        root.innerHTML = Timer30s.getHTML();

        this.el = { // object for holding elements of timer
            minutes: root.querySelector(".timer_part-minutes"),
            seconds: root.querySelector(".timer_part-seconds"),
            control: root.querySelector(".timer_button-control"),
            reset: root.querySelector(".timer_button-reset")
        }

        this.interval = null; // no interval at start (timer isn't running)
        this.remainingSeconds = 30;

        // syntax is addEventListener(type, listener) where type is click and listener is an anonymous function
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.stop();
            this.remainingSeconds = 30;
            this.updateInterfaceTime();
        });
    }

    updateInterfaceTime() { // returns appropriate minutes and seconds
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0"); // pad string with 0s until the string is the given length of 2
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls() { // display play or pause icon
        if (this.interval === null) { // display play icon if timer isn't running
            this.el.control.innerHTML = `<span class="material-icons-round">play_circle</span>`;
            this.el.control.classList.add("timer_button-start"); // add start class to button
            this.el.control.classList.remove("timer_button-stop"); // remove stop class from button
        }
        else { // display pause icon if timer is running
            this.el.control.innerHTML = `<span class="material-icons-round">pause_circle</span>`;
            this.el.control.classList.add("timer_button-stop"); // add stop class to button
            this.el.control.classList.remove("timer_button-start"); // remove start class from button
        }
    }

    start() { // start timer
        if (this.remainingSeconds === 0) return; // stop this method

        this.interval = setInterval(() => { // call this inner function every second (1000 milliseconds)
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) { // stop at 0
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() { // stop timer
        clearInterval(this.interval); // stop the asynchronous setInterval function
        
        // set up to display play icon
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() { // return HTML string from index.html
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
            <button type="button" class="timer_button timer_button-control timer_button-start">
                <span class="material-icons-round">play_circle</span>
            </button>
            <button type="button" class="timer_button timer_button-control timer_button-reset">
                <span class="material-icons-round">replay_circle_filled</span>
            </button>
        `;
    }
}

export class Timer45s { // to import this class into main.js
    constructor(root) {
        root.innerHTML = Timer45s.getHTML();

        this.el = { // object for holding elements of timer
            minutes: root.querySelector(".timer_part-minutes"),
            seconds: root.querySelector(".timer_part-seconds"),
            control: root.querySelector(".timer_button-control"),
            reset: root.querySelector(".timer_button-reset")
        }

        this.interval = null; // no interval at start (timer isn't running)
        this.remainingSeconds = 45;

        // syntax is addEventListener(type, listener) where type is click and listener is an anonymous function
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.stop();
            this.remainingSeconds = 45;
            this.updateInterfaceTime();
        });
    }

    updateInterfaceTime() { // returns appropriate minutes and seconds
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0"); // pad string with 0s until the string is the given length of 2
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls() { // display play or pause icon
        if (this.interval === null) { // display play icon if timer isn't running
            this.el.control.innerHTML = `<span class="material-icons-round">play_circle</span>`;
            this.el.control.classList.add("timer_button-start"); // add start class to button
            this.el.control.classList.remove("timer_button-stop"); // remove stop class from button
        }
        else { // display pause icon if timer is running
            this.el.control.innerHTML = `<span class="material-icons-round">pause_circle</span>`;
            this.el.control.classList.add("timer_button-stop"); // add stop class to button
            this.el.control.classList.remove("timer_button-start"); // remove start class from button
        }
    }

    start() { // start timer
        if (this.remainingSeconds === 0) return; // stop this method

        this.interval = setInterval(() => { // call this inner function every second (1000 milliseconds)
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) { // stop at 0
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() { // stop timer
        clearInterval(this.interval); // stop the asynchronous setInterval function
        
        // set up to display play icon
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() { // return HTML string from index.html
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
            <button type="button" class="timer_button timer_button-control timer_button-start">
                <span class="material-icons-round">play_circle</span>
            </button>
            <button type="button" class="timer_button timer_button-control timer_button-reset">
                <span class="material-icons-round">replay_circle_filled</span>
            </button>
        `;
    }
}

export class Timer1m { // to import this class into main.js
    constructor(root) {
        root.innerHTML = Timer1m.getHTML();

        this.el = { // object for holding elements of timer
            minutes: root.querySelector(".timer_part-minutes"),
            seconds: root.querySelector(".timer_part-seconds"),
            control: root.querySelector(".timer_button-control"),
            reset: root.querySelector(".timer_button-reset")
        }

        this.interval = null; // no interval at start (timer isn't running)
        this.remainingSeconds = 60;

        // syntax is addEventListener(type, listener) where type is click and listener is an anonymous function
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.stop();
            this.remainingSeconds = 60;
            this.updateInterfaceTime();
        });
    }

    updateInterfaceTime() { // returns appropriate minutes and seconds
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0"); // pad string with 0s until the string is the given length of 2
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls() { // display play or pause icon
        if (this.interval === null) { // display play icon if timer isn't running
            this.el.control.innerHTML = `<span class="material-icons-round">play_circle</span>`;
            this.el.control.classList.add("timer_button-start"); // add start class to button
            this.el.control.classList.remove("timer_button-stop"); // remove stop class from button
        }
        else { // display pause icon if timer is running
            this.el.control.innerHTML = `<span class="material-icons-round">pause_circle</span>`;
            this.el.control.classList.add("timer_button-stop"); // add stop class to button
            this.el.control.classList.remove("timer_button-start"); // remove start class from button
        }
    }

    start() { // start timer
        if (this.remainingSeconds === 0) return; // stop this method

        this.interval = setInterval(() => { // call this inner function every second (1000 milliseconds)
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) { // stop at 0
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() { // stop timer
        clearInterval(this.interval); // stop the asynchronous setInterval function
        
        // set up to display play icon
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() { // return HTML string from index.html
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
            <button type="button" class="timer_button timer_button-control timer_button-start">
                <span class="material-icons-round">play_circle</span>
            </button>
            <button type="button" class="timer_button timer_button-control timer_button-reset">
                <span class="material-icons-round">replay_circle_filled</span>
            </button>
        `;
    }
}

export class Timer5m { // to import this class into main.js
    constructor(root) {
        root.innerHTML = Timer5m.getHTML();

        this.el = { // object for holding elements of timer
            minutes: root.querySelector(".timer_part-minutes"),
            seconds: root.querySelector(".timer_part-seconds"),
            control: root.querySelector(".timer_button-control"),
            reset: root.querySelector(".timer_button-reset")
        }

        this.interval = null; // no interval at start (timer isn't running)
        this.remainingSeconds = 300;

        // syntax is addEventListener(type, listener) where type is click and listener is an anonymous function
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.stop();
            this.remainingSeconds = 300;
            this.updateInterfaceTime();
        });
    }

    updateInterfaceTime() { // returns appropriate minutes and seconds
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0"); // pad string with 0s until the string is the given length of 2
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls() { // display play or pause icon
        if (this.interval === null) { // display play icon if timer isn't running
            this.el.control.innerHTML = `<span class="material-icons-round">play_circle</span>`;
            this.el.control.classList.add("timer_button-start"); // add start class to button
            this.el.control.classList.remove("timer_button-stop"); // remove stop class from button
        }
        else { // display pause icon if timer is running
            this.el.control.innerHTML = `<span class="material-icons-round">pause_circle</span>`;
            this.el.control.classList.add("timer_button-stop"); // add stop class to button
            this.el.control.classList.remove("timer_button-start"); // remove start class from button
        }
    }

    start() { // start timer
        if (this.remainingSeconds === 0) return; // stop this method

        this.interval = setInterval(() => { // call this inner function every second (1000 milliseconds)
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) { // stop at 0
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() { // stop timer
        clearInterval(this.interval); // stop the asynchronous setInterval function
        
        // set up to display play icon
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() { // return HTML string from index.html
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
            <button type="button" class="timer_button timer_button-control timer_button-start">
                <span class="material-icons-round">play_circle</span>
            </button>
            <button type="button" class="timer_button timer_button-control timer_button-reset">
                <span class="material-icons-round">replay_circle_filled</span>
            </button>
        `;
    }
}

export class Timer10m { // to import this class into main.js
    constructor(root) {
        root.innerHTML = Timer10m.getHTML();

        this.el = { // object for holding elements of timer
            minutes: root.querySelector(".timer_part-minutes"),
            seconds: root.querySelector(".timer_part-seconds"),
            control: root.querySelector(".timer_button-control"),
            reset: root.querySelector(".timer_button-reset")
        }

        this.interval = null; // no interval at start (timer isn't running)
        this.remainingSeconds = 600;

        // syntax is addEventListener(type, listener) where type is click and listener is an anonymous function
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.stop();
            this.remainingSeconds = 600;
            this.updateInterfaceTime();
        });
    }

    updateInterfaceTime() { // returns appropriate minutes and seconds
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0"); // pad string with 0s until the string is the given length of 2
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls() { // display play or pause icon
        if (this.interval === null) { // display play icon if timer isn't running
            this.el.control.innerHTML = `<span class="material-icons-round">play_circle</span>`;
            this.el.control.classList.add("timer_button-start"); // add start class to button
            this.el.control.classList.remove("timer_button-stop"); // remove stop class from button
        }
        else { // display pause icon if timer is running
            this.el.control.innerHTML = `<span class="material-icons-round">pause_circle</span>`;
            this.el.control.classList.add("timer_button-stop"); // add stop class to button
            this.el.control.classList.remove("timer_button-start"); // remove start class from button
        }
    }

    start() { // start timer
        if (this.remainingSeconds === 0) return; // stop this method

        this.interval = setInterval(() => { // call this inner function every second (1000 milliseconds)
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) { // stop at 0
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() { // stop timer
        clearInterval(this.interval); // stop the asynchronous setInterval function
        
        // set up to display play icon
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() { // return HTML string from index.html
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
            <button type="button" class="timer_button timer_button-control timer_button-start">
                <span class="material-icons-round">play_circle</span>
            </button>
            <button type="button" class="timer_button timer_button-control timer_button-reset">
                <span class="material-icons-round">replay_circle_filled</span>
            </button>
        `;
    }
}

export class Timer15m { // to import this class into main.js
    constructor(root) {
        root.innerHTML = Timer15m.getHTML();

        this.el = { // object for holding elements of timer
            minutes: root.querySelector(".timer_part-minutes"),
            seconds: root.querySelector(".timer_part-seconds"),
            control: root.querySelector(".timer_button-control"),
            reset: root.querySelector(".timer_button-reset")
        }

        this.interval = null; // no interval at start (timer isn't running)
        this.remainingSeconds = 900;

        // syntax is addEventListener(type, listener) where type is click and listener is an anonymous function
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.stop();
            this.remainingSeconds = 900;
            this.updateInterfaceTime();
        });
    }

    updateInterfaceTime() { // returns appropriate minutes and seconds
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0"); // pad string with 0s until the string is the given length of 2
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls() { // display play or pause icon
        if (this.interval === null) { // display play icon if timer isn't running
            this.el.control.innerHTML = `<span class="material-icons-round">play_circle</span>`;
            this.el.control.classList.add("timer_button-start"); // add start class to button
            this.el.control.classList.remove("timer_button-stop"); // remove stop class from button
        }
        else { // display pause icon if timer is running
            this.el.control.innerHTML = `<span class="material-icons-round">pause_circle</span>`;
            this.el.control.classList.add("timer_button-stop"); // add stop class to button
            this.el.control.classList.remove("timer_button-start"); // remove start class from button
        }
    }

    start() { // start timer
        if (this.remainingSeconds === 0) return; // stop this method

        this.interval = setInterval(() => { // call this inner function every second (1000 milliseconds)
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) { // stop at 0
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() { // stop timer
        clearInterval(this.interval); // stop the asynchronous setInterval function
        
        // set up to display play icon
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() { // return HTML string from index.html
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
            <button type="button" class="timer_button timer_button-control timer_button-start">
                <span class="material-icons-round">play_circle</span>
            </button>
            <button type="button" class="timer_button timer_button-control timer_button-reset">
                <span class="material-icons-round">replay_circle_filled</span>
            </button>
        `;
    }
}