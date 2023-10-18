const axios = require('axios')
const URL_DB = 'http://localhost:5500/postsRoutes/posts/';

axios.get(URL_DB).then(function(response){
    console.log(response)
    
}).catch(function(error){
    console.log(error)
})
.finally(function(){
    //siempre sera ejecutado
})

