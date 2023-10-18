module.exports={
    
    get: async function name(req,res){
        res.status(200).send({msg:"users"})
    },

    post: async (req, res)=>{
        res.status(201).send({msg:"User create"})
    }
}