// 789XMLDocument
// 456-
// 123+
// 000.=
function Slove(val){
    var v = document.getElementById('res');
    v.value += val;
}
function Result(){
    var num1 = document.getElementById('res').value;
    try{
        var num2 =eval(num1.replace('x','*'));
        document.getElementById('res').value = num2;

    }
    catch{
        document.getElementById('res').value='Error';
    }
}
function Clear(){
    var inp=document.getElementById('res');
    inp.value='';
}
function Back(){
    var ev = document.getElementById('res');
    ev.value=ev.value.slice(0,-1);
}
document.addEventListener('keydown',function(event){
    const key = event.key;
    const vaildKeys='0123456789+-*/.%';
    if(vaildKeys.includes(key)){
        Slove(key === '*' ? 'x':key);

    }else if(key === 'Enter'){
        Result();
    }
    else if(key === 'Backspace'){
        Back();
    }
    else if(key.toLocaleLowerCase() === 'c'){
        Clear();
    }
});