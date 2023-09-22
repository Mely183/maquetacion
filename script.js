const URL_FIREBASE =
  "https://devs-imparables-default-rtdb.firebaseio.com/.json";


const renderPost = (post) => {
//   const container = document.querySelector("#post_container");
//   const autor_container = document.querySelector('#autor_container');
   const title_Post = document.querySelector('#title_post');
  const taglist = document.querySelector('#tags_list');

//   const autorName = document.createElement('span');
//   const datePost = document.createElement('span');
  const tag1 = document.createElement('li');
  const tag2 = document.createElement('li');
  const tag3 = document.createElement('li');
  const tag4 = document.createElement('li');

  const tag1_text=`#${post.tag[0]}`;
  const tag2_text=`#${post}`;
  const tag3_text=`#${post}`;
  const tag4_text=`#${post}`;

  tag1.className='p-1'
  tag2.className='ms-3'
  tag3.className='ms-3'
  tag4.className='ms-3'
  tag1.textContent=tag1_text
  tag2.textContent=tag2_text
  tag3.textContent=tag3_text
  tag4.textContent=tag4_text

  taglist.appendChild(tag1)
  taglist.appendChild(tag2)
  taglist.appendChild(tag3)
  taglist.appendChild(tag4)
};


const parserResponseFireBase = (response) => {
    const parsedResponse = []
        for(const key in response ){
            const element = {
                id: key,
                title: response[key].title,
                
            };
            parsedResponse.push(element)
        };
    return parsedResponse;
};



const renderList = (listToRender) => {
    console.log(listToRender)
    listToRender.forEach((post, index)=>{
        renderPost(post, index)
        console.log(post) 
    })
}

const getInfoApi = async () => {
  try {
    const response = await fetch(URL_FIREBASE, {
      method: "GET",
    });
      const parsed = await response.json();
      console.log(parsed)
      const array_post=parserResponseFireBase(parsed);
      renderList(array_post)
  } catch (error) {
    console.error(error);
  }
};

getInfoApi();
