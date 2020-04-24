alert("click 'ok' to start the game");
var time_now;
var value_check = 1;
var ms = 0,
    s = 0,
    timer;
start();
var best_time = [];
best_time[0] = localStorage.getItem("besttime1");
best_time[1] = localStorage.getItem("besttime2");
best_time[2] = localStorage.getItem("besttime3");
best_time[3] = localStorage.getItem("besttime4");
best_time[4] = localStorage.getItem("besttime5");

if (best_time[0] != null)
    document.getElementById("best_time").textContent = `best time: ${best_time[0]}`;

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let newPos;
let temp;
for (let i = arry.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arry[i];
    arry[i] = arry[newPos];
    arry[newPos] = temp;
}
var btn = document.querySelectorAll('.btn');
for (let j = 0; j < 25; j++) {
    btn[j].value = arry[j];
}
function btnonclick() {
    for (let k = 0; k < 25; k++) {
        if (value_check <= 25 && value_check == event.target.value) {
            event.target.value = parseInt(event.target.value) + 25;
            value_check++;
            break;
        }
        else if (value_check > 25 && value_check == event.target.value) {
            event.target.value = null;
            if (value_check == 50) {
                clearInterval(timer);
                timer = false;
                time_now = `${s < 10 ? "0" + s : s}.${ms < 10 ? "0" + ms : ms}`

                best_time.push(time_now);
                best_time.sort().pop();
                document.getElementById("best_time").textContent = `best time: ${best_time[0]}`;
                localStorage.setItem("besttime1", best_time[0]);
                localStorage.setItem("besttime2", best_time[1]);
                localStorage.setItem("besttime3", best_time[2]);
                localStorage.setItem("besttime4", best_time[3]);
                localStorage.setItem("besttime5", best_time[4]);
                document.querySelector(".message").textContent = `Your time is ${time_now} seconds!.Top five best times are ${best_time} `;
            }
            value_check++;
            break;

        }

    }
}

var TIME = document.getElementById("time");
function start() {
    if (!timer)
        timer = setInterval(run, 10)
}
function run() {
    TIME.textContent = `Time: ${s < 10 ? "0" + s : s}.${ms < 10 ? "0" + ms : ms} `;
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
}



