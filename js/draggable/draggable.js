let card = document.querySelector('.card');
let source = document.querySelector('.c1');
let destination = document.querySelector('.c2');
let suggestedTarget = document.querySelector('.suggested-target');

let createDraggableEleemnt = html => {
    let document = new DOMParser().parseFromString(html, 'text/html');
    return document.firstChild;
};

card.addEventListener('dragstart', event => {
    console.log('dragstart');
    event.effectAllowed = 'copyMove';
    suggestedTarget.style.display = 'block';
});

card.addEventListener('dragend', event => {
    console.log('dragend');
    suggestedTarget.style.display = 'none';
});

destination.addEventListener('drop', event => {
    console.log('drop');
    suggestedTarget.style.display = 'none';
    destination.appendChild(card);
    card.classList.add('dragged');
    event.preventDefault();
});

destination.addEventListener('dragover', event => {
    console.log('dragover');
    event.dataTransfer.dropEffect = 'move';
    event.preventDefault();
});
