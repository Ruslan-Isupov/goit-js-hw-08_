import  throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form")

const LOCALSTORAGE_KEY = "feedback-form-state"
const userData = {
    email: "",
    message: "" ,

}
setValueOfLocalStorage(userData)
form.addEventListener('input', throttle(setValueOfUserData,500))


function setValueOfUserData(e){
    userData.email = form.elements.email.value
    userData.message = form.elements.message.value
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData))
    setValueOfLocalStorage(userData)
}    
function setValueOfLocalStorage(userData){
    const getValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))

    if(getValue){
   form.elements.email.value = getValue.email
   form.elements.message.value = getValue.message
}
}    
form.addEventListener("submit", submitForm)
function submitForm(e){ 
   
    if(
    
    form.elements.email.value === "" ||  form.elements.message.value  === ""
)
   { 
    
alert("You need to fill all fields")
e.preventDefault() 
   }
   else {

    console.log(userData)
    e.preventDefault()
    localStorage.removeItem(LOCALSTORAGE_KEY)
    e.currentTarget.reset()
   }
}
