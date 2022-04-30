

const password = document.getElementById('password')

const confirmPass = document.getElementById('confirmPassword')


let errorMessage = document.getElementById('errorMessage');

const passwordMatch = ()=>{
    if(password.value != confirmPass.value){
        errorMessage.textContent="Password does not match";
        password.style.border="red solid 1px";
        confirmPass.style.border="red solid 1px";
        console.log('hi it does not match',)
        
    }
    else{
        errorMessage.textContent="";
        password.style.border="black solid 1px";
        confirmPass.style.border="black solid 1px";
        console.log('it matches')
    }
}




