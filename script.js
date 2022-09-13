function calcular ()
{
    var num = document.getElementById('txttabu')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por favor digite um número')
    } else {
        
    tab.innerHTML = ''
    for(var i = 0; i<=10; i++)
    {
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `${n} * ${i} = ${n*i}`
        item.value = `tab${i}`
        tab.appendChild(item)
    }
}
}