const express = require('express')

const dataModule = require('../modules/dataModule');

const adminRoute = express.Router()


adminRoute.get('/addbook', (req, res) => {
    
    res.render('addbook')
});


adminRoute.post('/addbook', (req, res) => {

    //responses map
    // 1 book saved successfully
    // 2 data error
    console.log(req.body)
    console.log(req.files);
    console.log(Object.keys(req.files));
    
    const bookTitle = req.body.bookTitle
    const bookDescription = req.body.bookDescription
    const bookPdf = req.files.bookPdf

    if (bookTitle && bookDescription && bookPdf && Object.keys(req.files).length > 1) {
        const imgs = []
        for (const key in req.files) {
            if (req.files[key].mimetype != 'application/pdf') {
                imgs.push(req.files[key])
                
            }
        }
        dataModule.addBook(bookTitle,bookDescription,bookPdf,imgs).then(()=>{
            res.json(1)
        })

        
    } else {
        res.json(2)
       
    }
    
    
   
    

});















module.exports = adminRoute