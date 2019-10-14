

var myFunc = function func(){
    ;
    if( myFunc.fired ) return;
    myFunc.fired = true;
    alert('Your Gay Point Is'); 
    document.getElementById("demo").innerHTML =
    Math.floor(Math.random() * 100)

};

((refToMyfunc)=>{
    setInterval(refToMyfunc, 1000);
   })(myFunc)