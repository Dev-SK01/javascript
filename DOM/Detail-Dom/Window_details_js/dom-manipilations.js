const body =  document.getElementById('body');
console.log(body);

function CreateElement(element){
    const Div = document.createElement(element);
    const pTag = document.createElement('p');
    pTag.id = 'text';
    pTag.textContent = 'This is function creates a section and creates p tag then append.';
    Div.append(pTag);
    body.append(Div);
};

function createinnerHtml(){
const element = `
<div>
<p> Created Using Inner Html </p>
</div>
`;
let innerHTML = `<p> ${typeof element}</p>`;
body.innerHTML += element + innerHTML;
}

createinnerHtml();
CreateElement('section');