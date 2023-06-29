
let operator, num1, num2, op_assign, evaluate, my_interval, tens;
tens = 10;

function RandomNum(){

    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);

    op_assign = Math.floor(Math.random()*4);

    if(op_assign == 1)
    {
        operator = "+";
    }
    else if(op_assign == 2)
    {
        operator = "-";
    }
    else if(op_assign == 3)
    {
        operator = "*";
    }
    else
    {
        operator = "/";
    }

    document.getElementById('question').textContent = num1+operator+num2+"=";
}
RandomNum();

function CheckAnswer(){

    evaluate = Math.round(eval(num1+operator+num2));
    
    if(evaluate == document.getElementById('answer').value)
    {
        document.getElementById('checkstatement').textContent = "Level Passed, Respect Earned!";
    }
    else{
        document.getElementById('checkstatement').textContent = "You better start crying now";
    }
}

function SetTimer(){

    tens--;
    document.getElementById('time').textContent = tens;
    if(tens == 0)
    {
        clearInterval(my_interval);
        document.getElementById('check').disabled = true;
        document.getElementById('checkstatement').textContent = "Go Home Loser!";
    }
}

my_interval = setInterval(SetTimer, 1000);

document.getElementById('check').onclick = CheckAnswer;