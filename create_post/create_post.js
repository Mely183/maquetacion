 const postTitle = document.getElementById('postTitle');
 const saveInfo = document.getElementById('saveInfo');

 
 saveInfo.addEventListener('click', function() {
     const newTitle = prompt('Enter a new post title:');

     if (postTitleInput.value.trim() === '') {
        alert('Por favor, ingresa un título antes de guardar la información.');
    } else {
       
    }
     if (newTitle !== null) { 
         postTitleInput.value = newTitle;
     }
 });