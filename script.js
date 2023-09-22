const posts = {
  post1: {
    url: "https://res.cloudinary.com/practicaldev/image/fetch/s--VTiIZVxa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://raw.githubusercontent.com/pchol22/kumo-articles/master/blog-posts/learn-serverless/front/assets/cover.png",
    usuario: {
      userName: "Pierre Chollet",
      userAvatar: "/src/user2.webp",
    },
    fecha: "09-20-2023",
    titulo: "Learn serverless on AWS step-by-step: Deploy a frontend!",
    tags: ["serverless", "aws", "javascript", "tutorial"],
    desciption:
      "In this series, I try to explain the basics of serverless on AWS, to enable you to build your own serverless applications. During the last 11 articles, we tackled together a lot of 'backend' services, creating small apps and interacting with them with HTTP requests. Today, let's start to close the loop and create a frontend, deployed on AWS, and able to interact with our backend services. What will we do today? Create a simple monorepo containing a frontend and a backend. Create a minimalistic backend. Create a frontend interacting with it, and deploy it on AWS!  All the code of this article is available on this repository.",
    reacciones: {
      love: 14,
      amazing: 6,
      mind_blowing: 6,
      thanks: 5,
      fire: 6,
    },
    num_comentarios: 10,
    readTime: "10 min",
  },
  post2: {
    url: "https://res.cloudinary.com/practicaldev/image/fetch/s--l-iAIbQx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n72u7msdmflruzlsh3jc.png",
    usuario: {
      userName: "Saurabh Rai",
      userAvatar: "/src/user1.webp",
    },
    fecha: "09-20-2023",
    titulo: "React sees a dip in downloads on npm. What's going on?",
    tags: ["webdev", "discuss", "javascript", "react"],
    desciption:
      "React is one of the most popular JavaScript libraries in the world, but it saw a dip in downloads this week. Could be a number of factors. Also, it might be something going on with npm.js as well. Who knows 🤯🤯??",
    reacciones: {
      love: 9,
      amazing: 7,
      mind_blowing: 5,
      thanks: 6,
      fire: 6,
    },
    num_comentarios: 17,
    readTime: "1 min",
  },
  post3: {
    url: "",
    usuario: {
      userName: "Michael Doyle",
      userAvatar: "/src/user3.webp",
    },
    fecha: "09-20-2023",
    titulo: "To `useMemo` or Not to `useMemo`: A React Developer’s Dilemma",
    tags: ["javascript", "performance", "webdev", "react"],
    desciption: "",
    reacciones: {
      love: 9,
      amazing: 0,
      mind_blowing: 0,
      thanks: 1,
      fire: 0,
    },
    num_comentarios: 2,
    readTime: "2 min",
  },
  post4: {
    url: "https://res.cloudinary.com/practicaldev/image/fetch/s--_WOoxZaj--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qpvmbeqyn1snq5bym87w.png",
    usuario: {
      userName: "Pierre Chollet",
      userAvatar: "/src/user4.webp",
    },
    fecha: "09-20-2023",
    titulo:
      "Don't block your users! Why you should adopt event-driven architecture",
    tags: ["javascript", "api", "webdev", "typescript"],
    desciption:
      "Building event-driven applications offers a flexible, but markedly different approach to building applications. Let’s take a look at how an event-driven architecture can benefit your users, developers, and your application code.",
    reacciones: {
      love: 2,
      amazing: 2,
      mind_blowing: 0,
      thanks: 1,
      fire: 1,
    },
    num_comentarios: 0,
    readTime: "5 min",
  },
  post4: {
    url: "https://res.cloudinary.com/practicaldev/image/fetch/s--EEe2Ua-X--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b9yl5x75va955clvbdsj.png",
    usuario: {
      userName: "Pierre Chollet",
      userAvatar: "/src/user2.webp",
    },
    fecha: "09-20-2023",
    titulo:
      "3 State Switches are not tough - Ultimate guide to CSS Switches using CSS only",
    tags: ["html", "css", "webdev", "ui"],
    desciption:
      "Hi there, when it comes to switches most people look for modern libraries but building core is very important. Creating switches are very easy. Today I will be sharing the guide to create CSS switches.",
    reacciones: {
      love: 1,
      amazing: 1,
      mind_blowing: 1,
      thanks: 1,
      fire: 1,
    },
    num_comentarios: 1,
    readTime: "5 min",
  },
  post5: {
    url: "https://res.cloudinary.com/practicaldev/image/fetch/s--VvNRix21--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qcu9r421gz8zzlrx4wq9.png",
    usuario: {
      userName: "Pierre Chollet",
      userAvatar: "/src/user2.webp",
    },
    fecha: "08-05-2023",
    titulo: "Comparison of Node.js libraries to colorize text in terminal",
    tags: ["webdev", "javascript", "node", "programming"],
    desciption:
      "In the Node.js world are huge number of different libraries for coloring text in the terminal. Every library write that 'I am the best', 'I am fastest', 'I'm smallest', etc.",
    reacciones: {
      love: 0,
      amazing: 0,
      mind_blowing: 0,
      thanks: 0,
      fire: 0,
    },
    num_comentarios: 0,
    readTime: "10 min",
  },
};

// const button_delete = document.createElement('#delete__button')

// button_delete.addEventListener('click', (event) => {
//     const elementToRemove = event.target.dataset.avatarID
//     // console.log(event)
//     listAvatar.splice(Number(elementToRemove), 1)
//     // console.log(listAvatar)
//     cleanList()
//     // form()
//     renderList(listAvatar)
// })

// const search =document.querySelector('#search__button')

// search.addEventListener('click',()=>{
//     const searching = document.querySelector('#search__bar')

//     console.log(searching)
// })

// const search_result =

console.log();

const URL_FIREBASE =
  "https://devs-imparables-default-rtdb.firebaseio.com/.json";

const renderPost = (post, index) => {
  const container = document.querySelector("#post_container");
  const title_Post = document.querySelector("#title_post");
  const taglist = document.querySelector("#tags_list");

  const title = document.createElement("h3");
  const tag1 = document.createElement("li");
  const tag2 = document.createElement("li");
  const tag3 = document.createElement("li");
  const tag4 = document.createElement("li");

  const title_text = `${post.titulo}`;

  const tag1_text = `#${post.tags[0]}`;
  const tag2_text = `#${post.tags[1]}`;
  const tag3_text = `#${post.tags[2]}`;
  const tag4_text = `#${post.tags[3]}`;

  title.className =
    "card-title card-title-lg mt-3 ms-md-5 ms-lg-5 d-none d-md-block d-lg-block";
  title.textContent = title_text;

  tag1.className = "p-1";
  tag2.className = "ms-3";
  tag3.className = "ms-3";
  tag4.className = "ms-3";
  tag1.textContent = tag1_text;
  tag2.textContent = tag2_text;
  tag3.textContent = tag3_text;
  tag4.textContent = tag4_text;

  title_Post.appendChild(title);
  taglist.appendChild(tag1);
  taglist.appendChild(tag2);
  taglist.appendChild(tag3);
  taglist.appendChild(tag4);
  container.appendChild(title_Post)
};

const parserResponseFireBase = (response) => {
  const parsedResponse = [];
  for (const key in response) {
    const element = {
      id: key,
      titulo: response[key].titulo,
      tags: response[key].tags,
      description: response[key].description,
      url: response[key].url,
    };
    parsedResponse.push(element);
  }
  return parsedResponse;
};

const renderList = (listToRender) => {
  console.log(listToRender);
  listToRender.forEach((post, index) => {
    renderPost(post, index);
  });
};

const getInfoApi = async () => {
  try {
    const response = await fetch(URL_FIREBASE, {
      method: "GET",
    });
    const parsed = await response.json();
    console.log(parsed);
    const array_post = parserResponseFireBase(parsed);
    renderList(array_post);
  } catch (error) {
    console.error(error);
  }
};

getInfoApi();
