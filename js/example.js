const nameH1Element = document.querySelector('h1.inline')
const connectNameElement = document.querySelector('span.red')
const inputModalElement = document.querySelector('dialog#inputModal')
const modalSubmitBtn = document.querySelector('button.modalSubmit')
const studentNumberElement = document.querySelector('span.studentNum')
const studentEmailElement = document.querySelector('span.studentEmail')

const localName = localStorage.getItem("userName")
const localNum = localStorage.getItem("userNumber")
const localEmail = localStorage.getItem("userEmail")

const checkNumber =(Num)=>{
    if(isNaN(Num)){
        return false
    }
    else{
        return true
    }
}
const CheckEmail = (eMail) => {                                                
     var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

     if(!reg_email.test(eMail)) {                            
       return false      
     }       
    else{
        return true
    }                     
}                            

const setName = (name) => {
    nameH1Element.textContent = name
    connectNameElement.textContent = name
}
const setStudentNum = (stNum) =>{
    studentNumberElement.textContent = stNum
}
const setStudentEmail = (stEmail) =>{
    studentEmailElement.textContent = stEmail
}

if(localName && localNum && localEmail){
    setName(localName)
    setStudentEmail(localEmail)
    setStudentNum(localNum)
} 


nameH1Element.onclick = () => {
    inputModalElement.showModal()
    //const inputName = prompt("이름을 입력해 주세요");
    // if(inputName){
    //     localStorage.setItem("userName", inputName)
    //     setName(inputName);
    // }else{
    //     alert("입력되지 않았습니다.");
    // }
}

modalSubmitBtn.onclick=()=>{
    
    const modalFormElement = document.querySelector('.modalForm')
    const formData = new FormData(modalFormElement)

    for(const[key, value] of formData){
        localStorage.setItem(key, value)
    }
    if(checkNumber(localStorage.getItem("userNumber"))&&
        CheckEmail(localStorage.getItem("userEmail"))){

    inputModalElement.close()
    }
    else{
        alert("잘못된 입력 입니다.")
    }
}

inputModalElement.onclick = (event) => {
    if(event.target.nodeName==='DIALOG') inputModalElement.close();
}

