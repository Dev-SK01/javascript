var num = new Number(10);
console.log( 'Number primitive Wrapper', num);
console.log('ToString : ' ,num.toString());
console.log('ToString Binary (2): ' ,num.toString(2));
console.log('ToString Decimal (8): ' ,num.toString(8));
console.log('ToLocaleString : ' ,num.toLocaleString());
console.log('ToExponential String : ' ,num.toExponential());
console.log('Toprexision : ' ,num.toPrecision(4));

console.log('*********** String Wrapper Type ************')

var string = new String('Hello !');
console.log('String primitive Wrapper ',string);
console.log('CharAt',string.charAt(2));
console.log('Char Code At : ',string.charCodeAt(2));
console.log('Concat : ' , string.concat('Learner'));
console.log('EndsWith : ' ,string.endsWith('!') );
console.log('Includes : ' , string.includes('H'));
console.log('IndexOf : ' ,string.indexOf('!'));
console.log('Repeat : ' ,string.repeat(2));
console.log('Replace : ' , string.replace('!' , 'Learner'));
console.log('Search : ' ,string.search('e'));
console.log('Split : ' ,string.split());
console.log('Trim : ' ,string.trim());
console.log("toUpper Case : ", string.toUpperCase());
