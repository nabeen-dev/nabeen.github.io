let z = document.getElementById("z");
let result = document.getElementById("result")
let calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", function(){
    let xValue = parseFloat(document.getElementById("x").value);
    let yValue = parseFloat(document.getElementById("y").value);

    if(!isNaN(xValue) && !isNaN(yValue)){
     z.value = (xValue * yValue / 100).toFixed(2);
     result.innerHTML = `${xValue}% of ${yValue} is <span>${z.value}</span>`;
    }
    else{
        result.innerHTML = "Inputs cannot be empty!";
    }
});