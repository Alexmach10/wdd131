const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Corregido a 'ul' en lugar de 'list'

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li'); // Movido aquí para que se cree uno nuevo cada vez que se haga clic en el botón
        li.textContent = input.value;
        
        const deleteButton = document.createElement('button'); // Movido aquí para que se cree uno nuevo cada vez que se haga clic en el botón
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Eliminar el elemento 'li' correspondiente al botón de eliminación
            input.focus();
        });

        li.appendChild(deleteButton); // Agregar el botón de eliminación al 'li'
        list.appendChild(li); // Agregar el 'li' a la lista
    }
    input.value = '';
    input.focus();
});