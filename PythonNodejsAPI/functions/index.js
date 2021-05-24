
const functions = require("firebase-functions");
const { PythonShell } = require('python-shell')

exports.input = functions.https.onRequest((request, response)=>{
    var respondData, inputText;

    inputText = request.query.inputText;
    console.log(inputText);

    
    var options = {
        mode: 'text',
        pythonPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python/venv/bin/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '/Users/slash/Projects/MIS/VoiceRecognition/app/src/main/python',
        args: [inputText]
      };

    PythonShell.run('main.py', options, (err, data) => {
        

        if(err) {
            console.log(err)
            throw err
        }
        
        console.log(data[0]);
    
        respondData = data[0];
        
        response.send(respondData);

    });
});
