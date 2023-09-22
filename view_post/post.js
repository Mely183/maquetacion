// const URL_API ='https://devs-imparables-default-rtdb.firebaseio.com';

// const URL_API2 = 'https://jsonplaceholder.typicode.com/users';

// alert('que ondaa')

const search =window.location.search
const url = new URLSearchParams(search)
const idpost = url.get('id');

const postTitle = document.querySelector('#post-title');

const postDescription =document.querySelector('#post-description');

const getInfoById = async () =>{
    try {
        const url = URL_API2 + '?=1' + '.json'
        const data = await fetch(url);

    const parsed = await data.json();
    console.log(parsed);
    postTitle.value = parsed.name
    postDescription.value = parsed.website 
    }
    catch(error){
        console.error(error);
    }
}

getInfoById()

