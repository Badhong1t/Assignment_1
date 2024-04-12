document.getElementById("calculate").addEventListener("click",function(event){

            event.preventDefault(); //It will prevent to reloads the page for submitting form.

            let num1 = parseFloat(document.getElementById("number1").value);
            let num2 = parseFloat(document.getElementById("number2").value);
            let operation = document.getElementById("operation").value;
            let result;

            if(isNaN(num1) || isNaN(num2)){

                document.getElementById("demo").style.backgroundColor = "#e3b6b3";
                document.getElementById("demo").style.padding = "10px";
                document.getElementById("demo").innerHTML = "Please enter valid numbers.";
                return;

            }

            switch(operation){

                case "addition": result = num1 + num2;
                break;

                case "subtraction": result = num1 - num2;
                break;

                case "multiplication": result = num1 *  num2;
                break;

                case "division": 
                if (num2 === 0){

                    alert("Division by zero is not recommended!");
                    return;

                }

                result = num1 / num2;
                break;

                default: result = "Invalid operation!";

                }

                document.getElementById("demo").style.backgroundColor = "#c5ebdc";
                document.getElementById("demo").style.padding = "10px";
                document.getElementById("demo").innerHTML = "Result: " + result;

        });