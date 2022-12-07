 // https://github.com/javascriptacademy-stash/calculator/blob/Final/index.js
//https://www.youtube.com/watch?v=QS6Y0ezhyCs


let output = document.getElementById("output");
// buttons array
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            //clear 
            case "AC":
                output.innerText = " ";
                break;
            //equal-to & try method for typing error
            case "=":
                try {
                    output.innerText = eval(output.innerText);
                } catch {
                    output.innerText = "Error"
                }
                break;
            // backward
            case "←":
                if (output.innerText) {
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            //input the data
            default:
                output.innerText += e.target.innerText;
        }
    });
});