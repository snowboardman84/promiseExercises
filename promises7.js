//so now we've gone over a lot of the syntax, but we haven't actually used them in an async function, 
//which is really why they exist. So let's see how that looks:

//let's mock an async event with a timeout

//this data object is useless
var data = {
	nation:"Belgium"
}

//this is defining your Promise function, which is name promise
let promise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		var data = "thing";
		resolve(data);
	}, 2000);
});

//this is how you excute your promise function
promise.then((t)=> {
	console.log(t);
}, ()=>{
	console.log("rejected");
});


//i've tried to use the data in a synchronous fashion, but the crown prince is undefined! (run the code to see) Oh no, let's fix that. 
//use the promise to console log the crown prince (don't actually modify the promise variable itself, use then() to
//extract the data

