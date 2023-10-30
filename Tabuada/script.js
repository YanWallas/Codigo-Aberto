function calcular(){
    var num = document.getElementById('txtn1');
    var tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');

    } else {
        var n = Number(num.value);
        var c = 0;
        tab.innerHTML = '';
        
    while (c <= 10) {
        var item = document.createElement('option');
        item.text = `${n} x ${c} = ${n * c}`;
        item.value = `tab${c}`;
        tab.appendChild(item);
        c++;  
        };
    }   

}