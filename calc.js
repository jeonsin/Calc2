//calc.js
function calc(){
    var number1 =Number(document.getElementById('number1').value);
    //var 변수 선언 입력받은 것은 모두 문자열이기 때문에 숫자로 바꿔준다.
    var number2 =Number(document.getElementById('number2').value); //첫글자를 대문자로 쓰면 class명
    var operator=document.getElementById('operator').value;

    if(operator==='+'){
        var result=number1+number2;
    }else if (operator==="-"){
        var result=number1-number2;
    }else if (operator==="*"){
        var result=number1*number2;
    }else if (operator==="/"){
        var result=number1/number2;
    }

    var div=document.getElementById('result');
    var output=`${number1} ${operator} ${number2}=${result}`;
    //`tap위에 있는 삐침 기호 
    div.innerHTML=output;
}

    

