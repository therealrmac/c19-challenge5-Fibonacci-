function fib(num){
var x= 1;
var y=0;
var newNum;
	for (var i=0; i<num; i++){
		while(num>=0){
			newNum=x;
			x= x+y;
			y= newNum;
			num--;
			console.log(y);
		}
	}
	return y;
}

console.log(fib(500));


