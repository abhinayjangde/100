
const operation = document.getElementById("operation")

const calculate = document.getElementById("calculate")

const result = document.getElementById("result")

calculate.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Enter valid numbers"
        return
    }

    let res;
    const op = operation.value;
    console.log(op)
    switch (op) {
        case "add":
            res = num1 + num2;
            break;
        case "subtract":
            res = num1 - num2;
            break;
        case "multiply":
            res = num1 * num2;
            break
        case "divide":
            if (num2 === 0) {
                result.textContent = "Cannot divide by zero";
                return

            } else {
                res = num1 / num2;
                break
            }

    }

    result.textContent = `Result: ${res}`
})