// var text = 5;
// var numri = 10
// var person = {firstname:'John', lastname: 'Doe', age:25}
// var text = '';
// // var x;
// let i = 0;
// let n = 0;
// let x = 0;


// for (i = 0;i<5;i++){
//     text +- "The number is "+ i + "<br>"
// }
// console.log(text);

// //i eshte indexi prsh 0-4 apo nr 1,2,3,4,5 ky
// // funksion i merr veq qka e plotsojn kushtin 
// //edhe i++ e rrit nr per njo ma shum


// for (i=0;i<10;i++){
//     numri += "The number is" + "<br>"
// }
// console.log(numri)


// for(x in person){
//     text += person[x];
// }
// console.log(text);

// for(x in person){
//     document.write(x + "<br>")
// }


// do{
//     i += 1;
//     console.log(i);
// }while(i<5);
// //i kena than +1 dmth per nr e jo per index

// while (n<3){
//     n++;
//     x+= n;
// }
// console.log(x);


var students = ["John", "Mark", "Ana"];

// for(i=0;students.length;i++){
//     document.write(students[i]+ '<br>')
// }


var names_input = document.getElementById('name_input');
var btnAdd = document.getElementById('btnAdd');
var btnShow = document.getElementById('btnShow');

btnAdd.onclick = function(){
    students.push(names_input.value);
}

btnShow.onclick = function(){
    for(i=0; i<students.length;i++){
        document.write(students[i] + '<br>');
    }
}
