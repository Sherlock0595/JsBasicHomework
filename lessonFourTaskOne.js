function num2Obj(num){
	if (isNaN(num)){
	  console.log('Ошибка: параметр не является числом');
	} else if(num>999 || num<0){
		console.log('Ошибка: допустимый диапазон 0-999');
	  let obj={};
	  return obj;
	} else {
		let digits=['единицы','десятки','сотни'];
	  var obj={};
	  var i=0;
	  for(let i=0; num!=0; i++){
	  	obj[digits[i]]=num%10;
	  	num=(num-num%10)/10;
		}
		}	
		return obj;
	}
console.log(num2Obj(245));
console.log(num2Obj(45));
console.log(num2Obj(5));