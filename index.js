const express=require('express');
const app=express();
const port=3000;
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("./api.yaml");
const db=require("./connection")
const cors=require("cors")
const shivam=require("./swagger_output.json")
const route=require("./routes/router")
const swaggerUI=require("swagger-ui-express")
// const swaggerFile = require('./swagger_output.json')
const fileUpload=require("express-fileupload")
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(shivam));



app.use(fileUpload());
app.use(route);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

