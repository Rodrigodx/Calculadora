function insert(num){
    var res = window.document.getElementById('res').innerHTML;
    window.document.getElementById('res').innerHTML = res + num
}

function clean(){
    window.document.getElementById('res').innerHTML = ""
}

function back(){
    var res = window.document.getElementById('res').innerHTML;
    window.document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}

function calcular(){
    var res = window.document.getElementById('res').innerHTML;
    if (res){
        window.document.getElementById('res').innerHTML = eval(res)
    }else{
        window.alert('ERROR! Digite algo!')
    } 
}