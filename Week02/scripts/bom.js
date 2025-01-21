const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const ulElement = document.querySelector('#list');


buttonElement.addEventListener('click', function () {
    if (inputElement.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const reference = document.createElement('p');

        reference.textContent = inputElement.value;
        deleteButton.textContent = '❌';

        li.append(reference);
        li.append(deleteButton);
        ulElement.append(li);

        deleteButton.addEventListener('click', function () {
            ulElement.removeChild(li);
            inputElement.focus();
        });

        inputElement.value = '';
        inputElement.focus();
    }
    else {
        inputElement.focus();
    }
})