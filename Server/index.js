const express = require("express");
const cors = require("cors");
const app = express();
const jsonfile = require('jsonfile');
const axios = require('axios');
const bodyParser = require('body-parser');



require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT;

const filePath = '../JSON/testschema.fhir.json';
const filePathNew = `../JSON/Patient.json`;
const serverUrl = 'https://hapi.fhir.org/baseR4/Patient';




app.post("/register",(req,res)=>{
  const body = req.body;
  console.log(body);
  
  

  // work with input data and creat json file with hl7-fhir standard schema
  jsonfile.readFile(filePath, (err, config) => {
    if (err) {
        console.error('Error reading config file:', err);
    } else {
        console.log(config);

        config.name[0].given = body.name;
        config.gender= body.gender;
        config.birthDate= body.dateOfBirth;
        config.telecom[0].value = body.phoneNumber;

        // create save new json file
        jsonfile.writeFile(filePathNew,config, (err) => {
            if (err) {
                console.error('Error writing to config file:', err);
            } else {
                console.log('Configuration updated, and JSON file created and saved successfully!');
            }
        });

        jsonfile.readFile(filePathNew, (err, config) => {
          if (err) {
              console.error('Error reading config file:', err);
          } else {     
            axios.post(serverUrl, config)
            .then((response) => {
              console.log(response.data); 
            })
            .catch((error) => {
              console.error(error); 
            });
      
          }});

    }
  });
});

app.get("/register",(req,res)=>{
  res.send("Data received");
});

app.post("/search",(req,res)=>{
  const body_ = req.body.name;
  console.log(body_);
  const response = getrequest(body_);
  console.log(response);
});

const getrequest = async (data) =>{

  const searchUrl = `https://hapi.fhir.org/baseR4/Patient?name=${data}`;
  const response = await axios.get(searchUrl);

  
  console.log(response.data);

  jsonfile.writeFile(filePathNew,response.data, (err) => {
    if (err) {
        console.error('Error writing to config file:', err);
        // Handle the error
    } else {
        app.get("/search",(req,res)=>{
          res.json(filePathNew);
        });
    }
  });
  

  return response;
  
}
  

app.listen(parseInt(port),_ => console.log(`the server is listening on port${parseInt(port)}`));