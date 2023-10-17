const URL_API ="https://devs-imparables-default-rtdb.firebaseio.com/"
const port = 3000

const search = window.location.search;
console.log(search)
const url = new URLSearchParams(search);
console.log(url)
const ID_POST = url.get('id');

const input_url = document.querySelector("#imageUrl");
const input_tittle = document.querySelector('#postTitle');
const input_post = document.querySelector('#floatingTextarea');
const buttonSave = document.querySelector('#saveChanges');


// CREACION DE ETIQUETAS
const selectElement = document.getElementById('tags'); 
const selectedTagsContainer = document.getElementById('selectedTagsContainer'); 
const maxSelectedTags = 4;
let selectedTags = [];

const tagsArray = [
    "webdev", "javascript", "beginners", "programming", "tutorial", "react", "python"
];

for (let i = 0; i < tagsArray.length; i++) {
    const tag = tagsArray[i];
    const option = document.createElement('option');
    option.value = tag;
    option.text = tag;
    selectElement.appendChild(option);
}


selectElement.addEventListener('change', function () {
    const selectedTag = selectElement.value;

    if (selectedTag && selectedTags.length < maxSelectedTags) {
        if (selectedTags.length < maxSelectedTags) {
            addSelectedTag(selectedTag);
            selectedTags.push(selectedTag);
            selectElement.value = 'Add up to 4 tags...'; 
        }
    }
    console.log(selectedTags)
});


function addSelectedTag(tag) {
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('alert', 'alert-primary', 'd-inline-block');

    const tagText = document.createElement('span');
    tagText.textContent = tag;
    tagText.classList.add('me-2');

    const removeButton = document.createElement('button');
    removeButton.classList.add('btn-close');

    removeButton.addEventListener('click', function () {
        const index = selectedTags.indexOf(tag);
        if (index !== -1) {
            selectedTags.splice(index, 1);
        }

        selectedTagsContainer.removeChild(tagDiv);
    });

    tagDiv.appendChild(tagText);
    tagDiv.appendChild(removeButton);

    selectedTagsContainer.appendChild(tagDiv);
}




// FUNCION PARA ACTUALIZAR POST 
const updatePost = async() => {
    const post = {
        url : input_url.value,
        titulo: input_tittle.value,
        description: input_post.value,
    };

    const url = URL_API + ID_POST + '.json';  
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(post)
    });
    if(response.status === 200){
      window.location.href = `http://127.0.0.1:${port}/view_post/post.html?id=${ID_POST}`
    }
};

buttonSave.addEventListener('click', () => {
    console.log("Guardando")
    updatePost()
});

// FUNCION PARA OBTENER LA INFORMACION DEL POST DESDE QUE SE MUESTRA PANTALLA EDIT POST
const getPostByID = async() => {
    const url = URL_API + ID_POST + '.json';  
    const info = await fetch(url);
    const parsed = await info.json();
    console.log(parsed)
    input_url.value = parsed.url;
    input_tittle.value = parsed.titulo;
    input_post.value = parsed.description;
};

getPostByID();