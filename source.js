let inputElement = document.getElementById('input');
let resultLine = document.getElementById('result');

function logText() {
    let textString = inputElement.value;
    if (textString === 'אסתי פרז'){ 
        console.log(true)
        resultLine.innerText = 'סחתיין, זה בול זה!'
    } else {
        console.log(false)
        resultLine.innerText = 'נסו שוב'
    }
}