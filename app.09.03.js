// let names = ['Adana ' ,'istanbul','Angara','aksaray','' ];
// var item=document.getElementById('city');
//  for (let i = 0; i < names.length; i++) {
   
//     if (names[i]!='Angara' && names[i].length){
//    item.innerHTML+='<li>'+names[i]+'</li>';}
   
    
// }

function not(num1){
    if(num1<=100 && num1 >= 0) {
    if(num1>=85) return "Pekiiyi";
   else if(num1>=70) return "iyi";
   else if(num1>=60) return "orta";
   else if(num1>=45) return "geçer";
   else if(num1<=44) return "kaldı";
}
else return "hatalı not";
}

// // number= prompt("Notunuzu Giriniz");

// // if(!isNaN(number)) {
// // console.log(not(number))
// // }
// // else{

// //     number= prompt("Notunuzu Giriniz");


// // }

// let number="sayi";

// while(isNaN(number) || !number.trim().length) {
//     number = prompt("Notunuzu Giriniz");

// }

// console.log(not(number));

let item= document.getElementById("login");

item.addEventListener('submit',function(event){
     event.preventDefault();
    let username = document.getElementById("note").value;
 if (!isNaN(username) && username.trim().length && username<=100 && username >= 0) {

 	document.getElementById('info').innerHTML="<b>Notunuz: <span style='color:red;''>"+username+"</span> Durumunuz: <span style='color:red;''>"+not(username)+"</span></b>";
 }
else{
 	document.getElementById('info').innerHTML="<b style='color:red;'> Lütfen Geçerli Bir Sayı Giriniz</b>"

}


})