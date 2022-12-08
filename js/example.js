const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const localName = localStorage.getItem("userName");

if(localName) {
    nameH1Element.textContent = localName;
    connectNameElement.textContent = localName;
}

nameH1Element.onclick = () => {
    const inputName = prompt("이름을 입력해 주세요");

    if(inputName){
        localStorage.setItem("userName", inputName)

        nameH1Element.textContent = inputName;
        connectNameElement.textContent = inputName;
    }else{
        alert("입력되지 않았습니다.");
    }
 
}
