const express = require('express')

const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))


const { exec } = require("child_process");




app.listen(port, () => {
    console.log("Rot 5, bereit!")


})
app.get('/',(req, res) => {
    res.render('main.ejs')

})

app.post('/convert',(req, res) => {
    console.log(req.body.link)

    exec('ffmpeg.exe -protocol_whitelist file,http,https,tcp,tls,crypto -i "'+req.body.link+'" -c copy video.mp4 ', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    

    res.redirect('/')

})