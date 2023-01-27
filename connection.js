const mongoose = require('mongoose')
mongoose.set('strictQuery', 
true);
mongoose.connect('mongodb+srv://ambuj:4614@cluster0.j9fakum.mongodb.net',{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})
.then(()=>{
    console.log("Database connected")
}
)
.catch((err)=>{
    console.log(err)
}
)