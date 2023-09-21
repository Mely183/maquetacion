 const postTitle = document.getElementById('postTitle');
 const saveInfo = document.getElementById('saveInfo');
 const emptyTitleAlert = document.getElementById('emptyTitleAlert');

 const postInfo = {
    title: ''
};

saveInfo.addEventListener('click', function() {
    const newTitle = postTitle.value.trim();

    if (newTitle === '') { 
        // El título está vacío, muestra la alerta
        emptyTitleAlert.classList.remove('d-none');
    } else {
        // El título no está vacío, oculta la alerta si estaba visible
        emptyTitleAlert.classList.add('d-none');
        console.log(newTitle)
        // Puedes hacer algo con el título no vacío aquí si es necesario
    }
});



