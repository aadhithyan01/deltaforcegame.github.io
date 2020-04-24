/*var ms = 0,
    s = 0,
    status = "playing",
    timer;*/
    function newgame() {
        /*var value_check = 1;
        status = "playing";
        s = 0;
        ms = 0;
        start();*/
        let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        let newPos;
        let temp;
        for (let i = arry.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = arry[i];
            arry[i] = arry[newPos];
            arry[newPos] = temp;
        }
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        var btn3 = document.getElementById("btn3");
        var btn4 = document.getElementById("btn4");
        var btn5 = document.getElementById("btn5");
        var btn6 = document.getElementById("btn6");
        var btn7 = document.getElementById("btn7");
        var btn8 = document.getElementById("btn8");
        var btn9 = document.getElementById("btn9");
        var btn10 = document.getElementById("btn10");
        var btn11 = document.getElementById("btn11");
        var btn12 = document.getElementById("btn12");
        var btn13 = document.getElementById("btn13");
        var btn14 = document.getElementById("btn14");
        var btn15 = document.getElementById("btn15");
        var btn16 = document.getElementById("btn16");
        var btn17 = document.getElementById("btn17");
        var btn18 = document.getElementById("btn18");
        var btn19 = document.getElementById("btn19");
        var btn20 = document.getElementById("btn20");
        var btn21 = document.getElementById("btn21");
        var btn22 = document.getElementById("btn22");
        var btn23 = document.getElementById("btn23");
        var btn24 = document.getElementById("btn24");
        var btn25 = document.getElementById("btn25");
        alert("hi");
        btn1.value = arry[0]
        btn2.value = arry[1]
        btn3.value = arry[2]
        btn4.value = arry[3]
        btn5.value = arry[4]
        btn6.value = arry[5]
        btn7.value = arry[6]
        btn8.value = arry[7]
        btn9.value = arry[8]
        btn10.value = arry[9]
        btn11.value = arry[10]
        btn12.value = arry[11]
        btn13.value = arry[12]
        btn14.value = arry[13]
        btn15.value = arry[14]
        btn16.value = arry[15]
        btn17.value = arry[16]
        btn18.value = arry[17]
        btn19.value = arry[18]
        btn20.value = arry[19]
        btn21.value = arry[20]
        btn22.value = arry[21]
        btn23.value = arry[22]
        btn24.value = arry[23]
        btn25.value = arry[24]
        function btnonclick1() {
            if (value_check <= 25 && value_check == arry[0]) {
                arry[0] = arry[0] + 25;
                btn1.value = arry[0];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[0]) {
                btn1.value = null;
                value_check++;
            }
    
        }
        function btnonclick2() {
            if (value_check <= 25 && value_check == arry[1]) {
                arry[1] += 25;
                btn2.value = arry[1];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[1]) {
                btn2.value = null;
                value_check++;
            }
        }
        function btnonclick3() {
            if (value_check <= 25 && value_check == arry[2]) {
                arry[2] += 25;
                btn3.value = arry[2];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[2]) {
                btn3.value = null;
                value_check++;
            }
        }
        function btnonclick4() {
            if (value_check <= 25 && value_check == arry[3]) {
                arry[3] += 25;
                btn4.value = arry[3];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[3]) {
                btn4.value = null;
                value_check++;
            }
        }
        function btnonclick5() {
            if (value_check <= 25 && value_check == arry[4]) {
                arry[4] += 25;
                btn5.value = arry[4];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[4]) {
                btn5.value = null;
                value_check++;
            }
        }
        function btnonclick6() {
            if (value_check <= 25 && value_check == arry[5]) {
                arry[5] += 25;
                btn6.value = arry[5];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[5]) {
                btn6.value = null;
                value_check++;
            }
        }
        function btnonclick7() {
            if (value_check <= 25 && value_check == arry[6]) {
                arry[6] += 25;
                btn7.value = arry[6];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[6]) {
                btn7.value = null;
                value_check++;
            }
        }
        function btnonclick8() {
            if (value_check <= 25 && value_check == arry[7]) {
                arry[7] += 25;
                btn8.value = arry[7];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[7]) {
                btn8.value = null;
                value_check++;
            }
        }
        function btnonclick9() {
            if (value_check <= 25 && value_check == arry[8]) {
                arry[8] += 25;
                btn9.value = arry[8];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[8]) {
                btn9.value = null;
                value_check++;
            }
    
        }
        function btnonclick10() {
            if (value_check <= 25 && value_check == arry[9]) {
                arry[9] += 25;
                btn10.value = arry[9];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[9]) {
                btn10.value = null;
                value_check++;
            }
        }
        function btnonclick11() {
            if (value_check <= 25 && value_check == arry[10]) {
                arry[10] += 25;
                btn11.value = arry[10];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[10]) {
                btn11.value = null;
                value_check++;
            }
        }
        function btnonclick12() {
            if (value_check <= 25 && value_check == arry[11]) {
                arry[11] += 25;
                btn12.value = arry[11];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[11]) {
                btn12.value = null;
                value_check++;
            }
        }
        function btnonclick13() {
            if (value_check <= 25 && value_check == arry[12]) {
                arry[12] += 25;
                btn13.value = arry[12];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[12]) {
                btn13.value = null;
                value_check++;
            }
        }
        function btnonclick14() {
            if (value_check <= 25 && value_check == arry[13]) {
                arry[13] += 25;
                btn14.value = arry[13];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[13]) {
                btn14.value = null;
                value_check++;
            }
        }
        function btnonclick15() {
            if (value_check <= 25 && value_check == arry[14]) {
                arry[14] += 25;
                btn15.value = arry[14];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[14]) {
                btn15.value = null;
                value_check++;
            }
        }
        function btnonclick16() {
            if (value_check <= 25 && value_check == arry[15]) {
                arry[15] += 25;
                btn16.value = arry[15];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[15]) {
                btn16.value = null;
                value_check++;
            }
        }
        function btnonclick17() {
            if (value_check <= 25 && value_check == arry[16]) {
                arry[16] += 25;
                btn17.value = arry[16];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[16]) {
                btn17.value = null;
                value_check++;
            }
        }
        function btnonclick18() {
            if (value_check <= 25 && value_check == arry[17]) {
                arry[17] += 25;
                btn18.value = arry[17];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[17]) {
                btn18.value = null;
                value_check++;
            }
        }
        function btnonclick19() {
            if (value_check <= 25 && value_check == arry[18]) {
                arry[18] += 25;
                btn19.value = arry[18];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[18]) {
                btn19.value = null;
                value_check++;
            }
        }
        function btnonclick20() {
            if (value_check <= 25 && value_check == arry[19]) {
                arry[19] += 25;
                btn20.value = arry[19];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[19]) {
                btn20.value = null;
                value_check++;
            }
        }
        function btnonclick21() {
            if (value_check <= 25 && value_check == arry[20]) {
                arry[20] += 25;
                btn21.value = arry[20];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[20]) {
                btn21.value = null;
                value_check++;
            }
        }
        function btnonclick22() {
            if (value_check <= 25 && value_check == arry[21]) {
                arry[21] += 25;
                btn22.value = arry[21];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[21]) {
                btn22.value = null;
                value_check++;
            }
    
        }
        function btnonclick23() {
            if (value_check <= 25 && value_check == arry[22]) {
                arry[22] += 25;
                btn23.value = arry[22];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[22]) {
                btn23.value = null;
                value_check++;
            }
        }
        function btnonclick24() {
            if (value_check <= 25 && value_check == arry[23]) {
                arry[23] += 25;
                btn24.value = arry[23];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[23]) {
                btn24.value = null;
                value_check++;
            }
        }
        function btnonclick25() {
            if (value_check <= 25 && value_check == arry[24]) {
                arry[24] += 25;
                btn25.value = arry[24];
                value_check++;
            }
            else if (value_check > 25 && value_check == arry[24]) {
                btn25.value = null;
                value_check++;
            }
        }
    }
    /*if (value_check == 50) {
        status = "won";
        clearInterval(timer);
        timer = false;
    }
    if (status === "won") {
        document.querySelector(".message").textContent = "You win!";
    }
    else {
        document.querySelector(".message").textContent = "";
    }*/
    /*var TIME = document.getElementById("time");
    function start() {
        if (!timer)
            timer = setInterval(run, 10)
    }
    function run() {
        TIME.textContent = `Time: ${s < 10 ? "0" + s : s}.${ms < 10 ? "0" + ms : ms}`;
        ms++;
        if (ms == 100) {
            ms = 0;
            s++;
        }
    }
    
    */