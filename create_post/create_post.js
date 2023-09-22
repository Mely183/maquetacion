const imageUrl = document.getElementById('imageUrl');
const postTitle = document.getElementById('postTitle');
const description = document.getElementById('postDescription');
const saveInfo = document.getElementById('saveInfo');
const emptyTitleAlert = document.getElementById('emptyTitleAlert');

// Define el elemento select y el contenedor de etiquetas seleccionadas
const selectElement = document.getElementById('tags'); // Cambiado de 'selectTags' a 'tags'
const selectedTagsContainer = document.getElementById('selectedTagsContainer'); // Cambiado de '.d-flex' a 'selectedTagsContainer'

// ETIQUETAS
const tagsArray = [
    "webdev", "javascript", "beginners", "programming", "tutorial", "react", "python"
];

// Agrega las etiquetas al elemento select
for (let i = 0; i < tagsArray.length; i++) {
    const tag = tagsArray[i];
    const option = document.createElement('option');
    option.value = tag;
    option.text = tag;
    selectElement.appendChild(option);
}

// Agrega un evento de cambio al elemento select
selectElement.addEventListener('change', function () {
    const selectedTags = Array.from(selectElement.selectedOptions).map(option => option.value);

    selectedTagsContainer.innerHTML = '';

    selectedTags.forEach(tag => {
        addSelectedTag(tag);
    });
});

function addSelectedTag(tag) {
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('alert', 'alert-primary');

    const tagText = document.createElement('span');
    tagText.textContent = tag;
    tagText.classList.add('me-2');

    const removeButton = document.createElement('button');
    removeButton.classList.add('btn-close');

    removeButton.addEventListener('click', function () {
        selectedTagsContainer.removeChild(tagDiv);
    });

    tagDiv.appendChild(tagText);
    tagDiv.appendChild(removeButton);

    selectedTagsContainer.appendChild(tagDiv);
}


const postInfo = {
    url: '',
    titulo: '',
    tags: [],
    description: '',
}

/**
 * Este evento se activa cuando el usuario hace clic en el botón "Save Changes".
 * Verifica si el campo de título no está vacío y muestra una alerta si lo está.
 * @param {Event} event - El evento click.
 */
saveInfo.addEventListener('click', function () {
    const newTitle = postTitle.value.trim();
    const newImage = imageUrl.value.trim();
    const newDescription = description.value;
    const selectedTags = Array.from(selectElement.selectedOptions).map(option => option.value);

    if (newTitle === '') { 
        emptyTitleAlert.classList.remove('d-none');
    } else {
        emptyTitleAlert.classList.add('d-none');
        postInfo.titulo = newTitle;
        postInfo.url = newImage;
        postInfo.description = newDescription;
        postInfo.tags = selectedTags;
        console.log(newTitle)
        postSave();
    }
});

const URL_FIREBASE='https://devs-imparables-default-rtdb.firebaseio.com/.json'

const postSave = async() =>{
    const response = await fetch(URL_FIREBASE, {
        method: 'POST',
        headers: { 'Content-type' : 'application/json;charset=UTF-8'},
        body: JSON.stringify(postInfo), 
    });
};


//Información INPUTS

const inputTitle = document.getElementById("postTitle");
const inputTags = document.getElementById("tags");
const inputDescription = document.getElementById("postDescription");
const textInfo = document.getElementById("textInfo");


function mostrarInformacionPorDefecto() {
    textInfo.innerHTML = `
      <span class="fw-semibold">Writing a Great Post Title</span>
      <p class="text-secondary">Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
      Use keywords where appropriate to help ensure people can find your post by search.</p>
    `;
  }
  
  mostrarInformacionPorDefecto();

inputTitle.addEventListener("click", function() {

  textInfo.innerHTML = `
    <span class="fw-semibold">Writing a Great Post Title</span>
    <p class="text-secondary">Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
    Use keywords where appropriate to help ensure people can find your post by search.</p>
  `;
});


inputTags.addEventListener("click", function() {

    textInfo.innerHTML = `
      <span class="fw-semibold">Tagging Guidelines</span>
      <p class="text-secondary">Tags help people find your post.
      Think of tags as the topics or categories that best describe your post.
      Add up to four comma-separated tags per post. Combine tags to reach the appropriate subcommunities.
      Use existing tags whenever possible.
      Some tags, such as “help” or “healthydebate”, have special posting guidelines.</p>
    `;
});

inputDescription.addEventListener("click", function() {

    textInfo.innerHTML = `
      <span class="fw-semibold">Editor Basics</span>
      <p class="text-secondary">Use Markdown to write and format posts.
      Commonly used syntax
      Embed rich content such as Tweets, YouTube videos, etc. Use the complete URL: {% embed https://... %}. See a list of supported embeds.
      In addition to images for the post's content, you can also drag and drop a cover image.</p>
    `;
  });