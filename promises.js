//here's another way to handle async javascript, in a way that avoids callback
//hell

//A promise!

//here's what they look like :

var stuff = new Promise((callback, reject)=>{
	console.log('running some code inside promise');
	reject();

});

//console.log(promise);

//execute the file to see the output - notice that its just a 
//dang promise object. A promise doesn't do anything until 
//tell it to. Essentially, you run a promise by using the
//"then" method on the promise object
//comment the console log above, and comment out the code below
//to see how you use the then method 

stuff.then(function(){ 	
	console.log('running code after promise');
}, function(){
	console.log('running reject')
});
