const express=require('express');
consr hbs=require('hbs');


var app=express();

app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
//	res.send('Hello Express');

	res.send({
		name:'Abhishek',
		likes:['Biking','Swimming']
	});
});

app.get('/about',(req,res)=>{
	res.send('Hello');
});

app.get('/bad',(req,res)=>{
	res.send({ name : 'BAD REQUEST'
	})
});


app.listen(3000,()=>{
	console.log('Server is up and running');
});



