var input = document.getElementById("input");
var submit = document.getElementById("submit");
var output = document.getElementById("output");

submit.onclick = function() {
    var evaluation;
    try {
        evaluation = eval(input.value);
    } catch (e) {
        evaluation = e;
    }
    try {
        if (evaluation.toString !== undefined) {
            evaluation = evaluation.toString();
        }
    } catch (e) {
        
    }
    append_output(evaluation);
};

function append_output(text) {
    var element = document.createElement("p");
    if (element.innerText === undefined) {
        element.innerHTML = text;
    } else {
        element.innerText = text;
    }
    output.appendChild(element);
}