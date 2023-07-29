const form = document.querySelector('#Myform');
console.log(form);

const name = form.querySelector('#name');
console.log(name)
const age = form.querySelector('#age');
console.log(age);
const btn = form.querySelector('#btn');
console.log(btn);


const details = document.querySelector('#details');
const name1 = document.querySelector('.name');
const age1 = document.querySelector('.age');
console.log(name1)

// creating a class for the submit data.

class Exampel {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

// submitting the data function
function submitData(event) {

    console.log(event.target)
    const name2 = name.value;
    const age2 = age.value;

    const student = new Exampel(name2, age2);

    console.log(student);

    // storage api 

    window.sessionStorage.setItem('Student_session', JSON.stringify(student));
    const sessionData = JSON.parse(sessionStorage.getItem('Student_session'));
    const key = sessionStorage.key(0);
    console.log(sessionData.name);
    console.log(sessionData.age);

    // adding the data to th HTML DOM
    name1.innerText = `Name ${sessionData.name}`;
    age1.innerText = `Age ${sessionData.age}`;

    details.style.border = '1px black solid '
    details.style.marginTop = '1.5rem';
    details.style.width = ' 25%';
    const Keydata = document.createElement('p');
    Keydata.innerText = `Key ${key}`;
    details.append(Keydata);
    event.preventDefault();
}

// btn  logic

form.addEventListener('submit', submitData);

// crearting function for the WebStorageApi

 export default function ExampleWebStorageApi(formId, nameId, ageId, detailId, nameId01, ageId01) {

    const form = document.querySelector(`#${formId}`);
    console.log(form);

    const name = form.querySelector(`#${nameId}`);
    console.log(name)
    const age = form.querySelector(`#${ageId}`);
    console.log(age);


    const details = document.querySelector(`#${detailId}`);
    const name1 = document.querySelector(`.${nameId01}`);
    const age1 = document.querySelector(`.${ageId01}`);
    console.log(name1)

    // creating a class for the submit data.

    class Exampel {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }
    }

    // submitting the data function
    function submitData(event) {

        console.log(event.target)
        const name2 = name.value;
        const age2 = age.value;

        const student = new Exampel(name2, age2);

        console.log(student);

        // storage api 

        window.sessionStorage.setItem('Student_session', JSON.stringify(student));
        const sessionData = JSON.parse(sessionStorage.getItem('Student_session'));
        const key = sessionStorage.key(2);
        console.log(sessionData.name);
        console.log(sessionData.age);

        // adding the data to th HTML DOM
        name1.innerText = `Name ${sessionData.name}`;
        age1.innerText = `Age ${sessionData.age}`;

        details.style.border = '1px black solid '
        details.style.marginTop = '1.5rem';
        details.style.width = ' 25%';
        const Keydata = document.createElement('p');
        Keydata.innerText = `Key ${key}`;
        details.append(Keydata);
        event.preventDefault();
    }

    // btn  logic

    form.addEventListener('submit', submitData);
}

// const student1 = new Exampel('devsk', '20');

//     console.log(student1);

//     // storage api 

//     window.sessionStorage.setItem('Student_session' , JSON.stringify(student1));
//     const sessionData = JSON.parse(sessionStorage.getItem('Student_session'));
//     console.log(sessionData.name);
//     console.log(sessionData.age);
//     name1.innerText = `Name ${sessionData.name}`;
//     age1.innerText = `Age ${sessionData.age}`;

//     details.style.border = '1px black solid '
//     details.style.marginTop = '1.5rem';
//     details.style.width = ' 25%'





