module.exports = {
    components: {
        schemas: {
            post: {
                type: 'object',
                properties: {
                    titulo: { 
                        type: String, 
                        example: 'This is a title'
                    },
                    description: {
                        type: String, 
                        example: 'Here is a descritpion'
                    },
                    tags: { 
                        type: 'object',
                        properties: {
                            tag1: {
                                type: String,
                                example: "Tag1"
                            },
                            tag2: {
                                type: String,
                                example: "Tag2"
                            },
                            tag3: {
                                type: String,
                                example: "Tag3"
                            },
                            tag4: {
                                type: String,
                                example: "Tag4"
                            },
                        }
                    },
                    url: { 
                        type: String, 
                        example: 'http://imageurl.com'
                    }
                }
            },
            user:{
                type: 'object',
                properties: {
                    _id:{},
                    first_name: {
                        type: String,
                        example: 'Name'
                    },
                    last_name: {
                        type: String,
                        example: 'lastName'
                    },
                    email: {
                        type: String,
                        example: 'youremail@email.com'
                    },
                    gender:{
                        type: String,
                        example: 'Female'
                    },
                    password:{
                        type: String,
                        example: 'sdhfi9837498'
                    }
                }

            }
        }
    }
}