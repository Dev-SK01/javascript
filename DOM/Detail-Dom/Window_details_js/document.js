const head1 = document.getElementById('head1');
const head2 = document.getElementById('head2');

const body = document.getElementsByTagName('body');

console.log(head1, head2,body);



console.log(document);
console.dir(document);
document.children[0].children[1].children[0].innerText = 'Document DOM-Tamil';

document.addEventListener('DOMContentLoaded' ,() => {
    console.log('Content Loaded | Event Listned');
    
})


