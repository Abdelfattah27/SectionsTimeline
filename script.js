for (let i = 1; i <= 16; i++) {
    let ele = document.createElement("option");
    ele.value = i;
    ele.innerText = `Section ${i}`;
    sel.appendChild(ele);

}

function hello() {
    let c = sel.value;
    hhh.innerText = `سكاشن ومحاضرات سكشن ${c}`

    if (c <= 8)
        firstgroup();
    else
        secondGroup();
    switch (parseInt(c)) {
        case 1:
            sec1();
            break;
        case 2:
            sec2();
            break;
        case 3:
            sec3();
            break;
        case 4:
            sec4();
            break;
        case 5:
            sec5();
            break;
        case 6:
            sec6();
            break;
        case 7:
            sec7();
            break;
        case 8:
            sec8();
            break;
        case 9:
            sec9();
            break;
        case 10:
            sec10();
            break;
        case 11:
            sec11();
            break;
        case 12:
            sec12();
            break;
        case 13:
            sec13();
            break;
        case 14:
            sec14();
            break;
        case 15:
            sec15();
            break;
        case 16:
            sec16();
            break;
        default:
            break;
    }
    setup();
}

function sec1() {
    sat1.innerText = "داتا بيز معمل "
    sat3.innerText = "معمل حاكمات دقيقة"
    tus1.innerText = "معمل دوائر"
}

function sec2() {
    tus1.innerText = "داتا بيز معمل "
    sat4.innerText = "معمل حاكمات دقيقة"
    tus2.innerText = "معمل دوائر"
}

function sec3() {
    tus2.innerText = "داتا بيز معمل ";
    tus4.innerText = "معمل حاكمات دقيقة ";
    tus3.innerText = "معمل دوائر"
}

function sec4() {
    tus3.innerText = "داتا بيز معمل "
    sat4.innerText = "معمل حاكمات دقيقة"
    tus4.innerText = "معمل دوائر"
}

function sec5() {
    tus4.innerText = "داتا بيز معمل ";
    tus1.innerText = "معمل حاكمات دقيقة ";
    wend2.innerText = "معمل دوائر"
}

function sec6() {
    wend4.innerText = "داتا بيز معمل ";
    tus2.innerText = "معمل حاكمات دقيقة ";
    wend3.innerText = "معمل دوائر"
}

function sec7() {
    sat5.innerText = "داتا بيز معمل ";
    tus3.innerText = "معمل حاكمات دقيقة ";
    wend4.innerText = "معمل دوائر"
}

function sec8() {
    sat4.innerText = "داتا بيز معمل "
    mon1.innerText = "معمل حاكمات دقيقة ";
    wend6.innerText = "معمل دوائر"
}

function sec9() {
    sat2.innerText = "داتا بيز معمل "
    sat5.innerText = "معمل حاكمات دقيقة"
    tus5.innerText = "معمل دوائر"
}

function sec10() {
    sat3.innerText = "داتا بيز معمل ";
    tus5.innerText = "معمل حاكمات دقيقة ";
    tus6.innerText = "معمل دوائر"
}

function sec11() {
    tus5.innerText = "داتا بيز معمل ";
    tus6.innerText = "معمل حاكمات دقيقة ";
    wend1.innerText = "معمل دوائر"
}

function sec12() {
    tus6.innerText = "داتا بيز معمل "
    mon4.innerText = "معمل حاكمات دقيقة ";
    wend6.innerText = "معمل دوائر"
}

function sec13() {
    wend1.innerText = "داتا بيز معمل "
    mon5.innerText = "معمل حاكمات دقيقة ";
    mon4.innerText = "معمل دوائر"
}

function sec14() {
    wend2.innerText = "داتا بيز معمل "
    mon6.innerText = "معمل حاكمات دقيقة ";
    mon5.innerText = "معمل دوائر"
}

function sec15() {
    wend5.innerText = "داتا بيز معمل "
    thrus3.innerText = "معمل حاكمات دقيقة "
    mon6.innerText = "معمل دوائر"
}

function sec16() {
    sat6.innerText = "داتا بيز معمل "
    sat1.innerText = "معمل حاكمات دقيقة"
    mon1.innerText = "معمل دوائر"
}
for (let i = 9; i <= 16.5;) {
    var tablehead = document.createElement("th");
    var c = `From ${(i <= 12) ? i : (i)%12} to ${(i+1.5 <= 12) ? i+1.5 : (i+1.5)%12 }`;
    tablehead.innerText = c;
    hee.appendChild(tablehead);
    i += 1.5;

}

function setup() {
    var m = document.body.querySelector("tbody").querySelectorAll("td");

    m.forEach(element => {
        element.style.backgroundColor = "";
        if (element.innerText != "" && element.colSpan <= 2 && element.className != "days") {
            element.style.backgroundColor = "rgb(245 190 190)";
        } else if (element.className == "days") {
            element.style.backgroundColor = "rgb(193 173 255)";
        }
    });
}

function clearall() {
    var mm = document.querySelectorAll(".data");
    mm.forEach(element => {
        element.innerText = "";
    });
}

function firstgroup() {
    clearall();
    sat2.innerText = " (4) هندسة اتصالات";
    mon2.innerText = "دوائر كهربية (3)";
    mon3.innerText = "آلات كهربية (6)";
    tus5.innerText = "كتابة تقارير فنية (2)";
    wend1.innerText = "الحاكمات الدقيقه (2)";
    thrus2.innerText = " رياضيات (2) من 11.15 الي 1.5";
    thrus3.innerText = "نظم قواعد البيانات (5)"
    thrus1.colSpan = 1;
    thrus2.colSpan = 2;
}

function secondGroup() {
    clearall();
    sat3.innerText = " (4) هندسة اتصالات";
    mon3.innerText = "دوائر كهربية (3)";
    mon2.innerText = "آلات كهربية (6)";
    tus4.innerText = "كتابة تقارير فنية (2)";
    wend3.innerText = "الحاكمات الدقيقه (2)";
    thrus1.colSpan = 2;
    thrus2.colSpan = 1;
    thrus1.innerText = "رياضيات (2) من 9 الي 11.15 ";

    thrus2.innerText = "نظم قواعد البيانات (5)"
}