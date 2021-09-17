let dragged;
const dropZones = document.getElementsByClassName('dropzone');
const result = document.getElementById('result');
const tags = document.getElementsByClassName('tag');

const dragStart = (event) => {
    dragged = event.target;
}
const dragEnter = (event) => {
    event.target.classList.add("selected");
}
const dragLeave = (event) => {
    event.target.classList.remove("selected");
}
const dragOver = (event) => {
    event.preventDefault();
}

const drop = (event) => {
    event.preventDefault();
    if (event.target.classList.contains("dropzone")){
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        event.target.classList.remove('selected');
    }

}
const check = () => {
    for (const tag of tags) {
            tag.classList.remove('bg-primary');
            tag.classList.remove('bg-success');
            tag.classList.remove('bg-danger');
        if (tag.dataset.display === tag.parentNode.dataset.answer) {
            tag.classList.add('bg-success');
        }
        else {
            tag.classList.add('bg-danger');

        }
    }
}

for (const dropZone of dropZones) {
    dropZone.addEventListener('dragenter', dragEnter);
    dropZone.addEventListener('dragleave', dragLeave);
    dropZone.addEventListener('dragover',dragOver);
}

document.addEventListener('dragstart', dragStart);
document.addEventListener('drop', drop);
result.addEventListener('click', check);
