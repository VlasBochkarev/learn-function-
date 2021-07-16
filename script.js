
function calculate(a,b,c){
    console.log(a,b,c)
    switch(c){
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        
        
    }
}
/*alert(calculate(parseInt(prompt("input a")),parseInt(prompt("input b")),prompt("input c")))*/

function checkPrimeNumber(a){
    let b = a % 1
    return(b==0) ? alert("whole number") : alert("real number")
}

/*let result = checkPrimeNumber(+prompt("please input number"))*/

function culcTablesMult(a){
    for(let i = 2 ; i <= 9 ; i++){
        alert(parseInt(a) * i)
    }
}
//let tables = culcTablesMult(+prompt("please input number"))

function culcResidueOfDiv(a,b){
    alert(a - Math.floor(a/b) * b)
}

//let culc = culcResidueOfDiv(+prompt("input first number"),+prompt("input second number"))

function culcPlus(a){

    let c = 0;
    let b 
    if(a < 1 || a > 5){
        alert("Error! please input number 1-5")
    }
    else{
        for(let i = 0 ; i < a ; i++){
        b = +prompt("input number");
        c = c + b;  
        }
    alert("result : " + c);
    }
    
}

//let plus = culcPlus(+prompt("how much numbers do you want to add "))

function checkMaxNumber (a){
    
    let b
    let c = 0;
    let result

    if(a < 1 || a > 5){
        alert("Error! please input number 1-5")
    }
    else{
        for(let i = 0 ; i < a ; i++){
            b = +prompt("input number");
            

            if (b > c ){
                c = b
                result = b;                
            } 
            else{
                
                result = c;              
            }
        }
    alert("result : " + result);
    }
}
//let max = checkMaxNumber(+prompt("how much numbers do you want to add "))

function showNumber(b,a){
    let answer = confirm("even numbers or not even numbers")
   
    if (answer == true){
        for(let i = b; i <= a; i++){
            let x = i % 2
            if(x==0){
                alert(i)
            }

        }

    }
    else {
        for(let i = b; i <= a; i++){
            let x = i % 2
            if (x==1){
                alert(i)
            }
        }
    }
}
let even = showNumber(+prompt("input first number"),+prompt("input second number"))

