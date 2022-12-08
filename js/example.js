const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const inputModalElement = document.querySelector('dialog#inputModal');

const localName = localStorage.getItem("userName");

const setName = (name) => {
    nameH1Element.textContent = name;
    connectNameElement.textContent = name;
}

if(localName) setName(localName);

nameH1Element.onclick = () => {
    inputModalElement.showModal();

    //const inputName = prompt("이름을 입력해 주세요");

    // if(inputName){
    //     localStorage.setItem("userName", inputName)
    //     setName(inputName);
    // }else{
    //     alert("입력되지 않았습니다.");
    // }
}

inputModalElement.onclick = (event) => {
    if(event.target.nodeName==='DIALOG') inputModalElement.close();
}

