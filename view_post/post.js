const port = 3000
const URL_DB = `http://localhost:${port}/`;


const search = window.location.search
//console.log(search);
const url = new URLSearchParams(search)
const ID_POST = url.get('id');

const postImg = document.querySelector('#post-cover')
const postTitle = document.querySelector('#post-title');
const postDescription = document.querySelector('#post-description');

const buttonEdit = document.querySelector('#buttonEdit')

// Boton editar
buttonEdit.addEventListener('click', (event) => {
    console.log(window);
    const elementToEdit = event.target.dataset.post

    window.location.href = '../edit_post/edit_post.html?id=' + ID_POST
})



// Traer informacion de ese hash
const getInfoById = async () => {
    const url = URL_DB + 'postsRoutes/posts/' + ID_POST

    console.log(url);
    const info = await fetch(url)
    console.log(info);

    const parsed = await info.json()
    console.log(parsed);

    // Para que se muestren en los inputs
    postImg.src = parsed.data.url
    postTitle.textContent = parsed.data.titulo
    postDescription.textContent = parsed.data.description
}

getInfoById()