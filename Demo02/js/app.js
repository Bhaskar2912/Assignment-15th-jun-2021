var fs = require('fs');


fs.readFile('demo.html', function(err, data) {
    
   if(err){
       console.log("error is "+ err);
       
    }else{
console.log("data is \n"+ data);

   }

  });




 
fs.writeFile('demo.html', 'Hello content2', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });



  fs.appendFile('demo.html', 'Hello content!', function (err) {
    if (err) throw err;
console.log('Saved!');
});




