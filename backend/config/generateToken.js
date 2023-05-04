const jwt=require('jsonwebtoken')

const key='d6d5caf6fce4158685cbcbf495be23d8857e136770c874a6a7af66dbd25414ca24ba5c0e0d317177c4ef2eee2201db911ebbf39878beb9126f507a3063d28af2'
// console.log(key)
const generateToken=(id)=>{
return jwt.sign({id},key,{
    expiresIn:'30d',
});
};

module.exports=generateToken