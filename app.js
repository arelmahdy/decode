var text = document.getElementById('text')
var result = document.getElementById('result')
var select = document.getElementById('select')

text.addEventListener('input',()=>{
    code()
})
select.addEventListener('change',()=>{
    code()
})

function code(){
    if(select.value=="decode"){
        result.value = window.atob(text.value)
    }else{
        result.value = window.btoa(text.value)
    }

    } 
