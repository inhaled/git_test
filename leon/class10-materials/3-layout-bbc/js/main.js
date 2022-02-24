/*var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;*/
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(today.toLocaleDateString("en-US", options));
/*document.write(today);*/ 	
var today  = new Date();