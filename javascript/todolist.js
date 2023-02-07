let addButton = document.getElementById('addButton');
let tdContainer = document.getElementById('tdContainer');
let textInput = document.getElementById('textInput');

addButton.addEventListener('click', function(){
    
    // p 태그 생성
    let paragraph = document.createElement('p');
    paragraph.innerText = textInput.value;
    paragraph.classList.add('paragraph-style');
    
    
    // child에 p 태그 추가
    tdContainer.appendChild(paragraph);
    
    
    // 다시 empty text로 변경
    textInput.value = "";
    textInput.focus();
    
    paragraph.addEventListener('click', function(){
       paragraph.style.textDecoration = "line-through"; 
    });    
    paragraph.addEventListener('dblclick', function(){
       tdContainer.removeChild(paragraph);
    });
});

textInput.addEventListener("keyup", function(e){
    if(e.keyCode == 13) {
        e.preventDefault();
        document.getElementById('addButton').click();
    }
});