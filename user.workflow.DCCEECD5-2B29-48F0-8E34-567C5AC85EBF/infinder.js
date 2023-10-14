const public = require('./public.js');
const fs = require('fs');
const moment = require('moment');
moment.locale('zh-cn');

module.exports = function() {
    fs.mkdir(public.basepath(), { recursive: true }, (err, path) => {
        try {
            fs.statSync(public.currentFile(moment().format("YYYYMMDD")))
            console.log(public.currentFile(moment().format("YYYYMMDD")));
        } catch (err) {
            fs.appendFile(public.currentFile(moment().format("YYYYMMDD")), '', (e) => { 
                if (e) {
                    console.log(e);
                    return;
                }
                console.log(public.currentFile(moment().format("YYYYMMDD")));
            });
        }
    });
}
