 let userName = document.querySelector("[name = 'name']")
 let age = document.querySelector("[name = 'age']")

document.forms[0].onsubmit = function(e){
    let userValid = false
    let ageValid = false

    if( userName.value !== "" && userName.value.length <= 10){
        userValid = true
    }

    if( age.value !== "" ){
        ageValid = true
    }

    if(userValid === false || ageValid === false){
        console.log(e)
        e.preventDefault()
    }
}

document.links[0].onclick = function(event){
    console.log(event)
    event.preventDefault()
}

window.onload = function(){
    userName.focus()
}

age.onblur = function(){
    document.links[0].click()
}