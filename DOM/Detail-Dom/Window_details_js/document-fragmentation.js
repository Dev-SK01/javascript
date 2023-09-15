const body = document.getElementById('body');

const fragment= document.createDocumentFragment();

const fooditem= ['Briyani', 'Parotta','Samosa' ,'Idly' ,'kali'];


console.log(fragment);


console.time('Function AddElement');
// function for createFragment

function addElementsByFragment(fooditem){
    let foodItem = fooditem;
    for(let i = 0 ; i < foodItem.length ; i++){
        const pTag = document.createElement('p');
        const element = `FG-${foodItem[i]}`;
        pTag.append(element);
        fragment.append(pTag);
        body.prepend(fragment);
    }
   
    
}
console.timeEnd('Function AddElement');

// function for createElement
console.time('Function CreateElement');

function addElementsByCreateElement(foodItem){
    let food = fooditem;
    for(let i = 0 ; i < food.length ; i++){
        const pTag = document.createElement('p');
        const element = `CL-${food[i]}`;
        pTag.append(element);
        body.append(pTag);
    }
}

console.timeEnd('Function CreateElement');


addElementsByFragment(fooditem);
addElementsByCreateElement(fooditem);


console.log(fragment);
