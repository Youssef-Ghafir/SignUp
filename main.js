let Signup= document.getElementById('Signup')
let name = document.getElementById('name')
 let allI = document.querySelectorAll('label i')
let pass = document.getElementById('password')
let email=document.getElementById('eamil')
console.warn('Created By Youssef Ghafir <المستبد لايفهم>')
Signup.addEventListener('click',()=>{
    Check();
})
//=======================//
function Check(){
    const Name=name.value.trim();
    const Pass =pass.value.trim();
    const Email =email.value.trim();
 if(Name==='' || Name.length <= 4) {
 name.style.borderBottomColor = "Tomato"
     allI[0].classList.add('fa-times-circle')
     allI[0].classList.remove('fa-check-circle')
 }else{
    allI[0].classList.add('fa-check-circle')
    allI[0].classList.remove('fa-times-circle')
    name.style.borderBottomColor = "#fff"
 }
 if(Pass==='' || Pass.length <= 6) {
    pass.style.borderBottomColor = "Tomato"
    allI[1].classList.add('fa-times-circle')
    allI[1].classList.remove('fa-check-circle')
}else{
   allI[1].classList.add('fa-check-circle')
   allI[1].classList.remove('fa-times-circle')
   pass.style.borderBottomColor = "#fff"
}
   
    if(Email===''|| !isEmail(Email)) {

        email.style.borderBottomColor = "Tomato"
        allI[2].classList.add('fa-times-circle')
        allI[2].classList.remove('fa-check-circle')
    }else{
       allI[2].classList.add('fa-check-circle')
       allI[2].classList.remove('fa-times-circle')
       email.style.borderBottomColor = "#fff"    }
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

