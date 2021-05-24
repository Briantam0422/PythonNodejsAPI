const { request } = require("express");
const express = require("express");
const app = express();



//search
app.get("/input", (req, res) => {

    var respondData, inputText;

    inputText = req.query.inputText;
    console.log(inputText);

    let { PythonShell } = require('python-shell')
    
    var options =
     {
        mode: 'text',
        pythonPath: 'C:/Users/brian/Desktop/project/MIS/MIS/VoiceRecognition/app/src/main/python/venv/bin/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: 'C:/Users/brian/Desktop/project/MIS/MIS/VoiceRecognition/app/src/main/python',
        args: [inputText]
      };

    PythonShell.run('main.py', options, (err, data) => {
        

        if(err) {
            console.log(err)
            throw err
        }
        
        console.log(data[0]);
    
        respondData = data[0];
        
        res.send(respondData);

    });


});

//train data
app.get("/train", (req, res) => {

    var respondData;

    let { PythonShell } = require('python-shell')
    
    var options = {
        mode: 'text',
        pythonPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python/venv/bin/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python',
      };

    PythonShell.run('train.py', options, (err, data) => {
        

        if(err) {
            console.log(err)
            throw err
        }
        
        console.log(data[0]);
    
        respondData = data[0];
        
        res.send(respondData);

    });


});


//delete data
app.get("/delete", (req, res) => {

    var respondData;

    let { PythonShell } = require('python-shell')
    
    var options = {
        mode: 'text',
        pythonPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python/venv/bin/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python',
      };

    PythonShell.run('drop.py', options, (err, data) => {
        

        if(err) {
            console.log(err)
            throw err
        }
        
        console.log(data[0]);
    
        respondData = data[0];
        
        res.send(respondData);

    });


});


//export data
app.get("/export", (req, res) => {

    var respondData;

    let { PythonShell } = require('python-shell')
    
    var options = {
        mode: 'text',
        pythonPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python/venv/bin/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python',
      };

    PythonShell.run('export_conversation.py', options, (err, data) => {
        

        if(err) {
            console.log(err)
            throw err
        }
        
        console.log(data[0]);
    
        respondData = data[0];
        
        res.send(respondData);

    });


});


app.listen(4000)





