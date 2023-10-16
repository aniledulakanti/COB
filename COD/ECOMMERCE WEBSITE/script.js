let MMEl = document.getElementById("MM");
let CMEl = document.getElementById("CM");
let MEl = document.getElementById("M");
let KMEl = document.getElementById("KM");
let submitbtnEl = document.getElementById("submitbtn");


submitbtnEl.onclick = function() {
    let value = MMEl.value;
    let MMValue = parseFloat(value);
    if(MMValue === null) {
        CMEl.value = "";
        MEl.value = "";
        KMEl.value = "";
        
    }
    else {
        CMEl.value = MMValue/10;
        MEl.value = MMValue /100;
        KMEl.value = MMValue /1000;
    }
}