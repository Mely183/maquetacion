const URL_API = 'https://devs-imparables-default-rtdb.firebaseio.com/';

const search = window.location.search
//console.log(search);
const url = new URLSearchParams(search)
const ID_POST = url.get('id');

const postTitle = document.querySelector('#post-title');
const postDescription = document.querySelector('#post-description');

const buttonEdit = document.querySelector('#buttonEdit')

buttonEdit.dataset.post = ID_POST

// Boton editar
buttonEdit.addEventListener('click', (event) => {
    console.log(window);
    const elementToEdit = event.target.dataset.post

    // para cambiar de vista
    //window.location.href = 'http://127.0.0.1:5500/17-Crud/update/'
    //window.location.href = 'http://127.0.0.1:5500/17-Crud/update/?id=' + elementToEdit + '&test=hola';
    window.location.href = 'http://127.0.0.1:5500/edit_post/?id=' + elementToEdit
    //window.location.pathname = '17-CRUD/update/'
})

// Traer informacion de ese hash
const getInfoById = async () => {
    const url = URL_API + ID_POST + '.json'
    console.log(url);
    const info = await fetch(url)
    console.log(info);

    const parsed = await info.json()
    console.log(parsed);

    // Para que se muestren en los inputs
    postTitle.textContent = parsed.titulo
    postDescription.textContent = parsed.desciption
}

// console.log(getInfoById());
getInfoById()