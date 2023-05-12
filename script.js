let string=" ";
let remainder=" ";
let remainder2=" ";
let remlen=0;
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='C'){
      string="";
      document.querySelector('input').value=string;
    }
//       else if(e.target.innerHTML=='%'){
//   remainder = "";
//   for(let i=0; i<string.length; i++){
//     remainder += string[i];
//     if(i==string.length-1){
//       remainder+='%'
//     }
//   }
//       remlen  =remainder.length;
//          console.log("remlen",remlen);
//   for(let i=remlen+1;i<string.length;i++){
//     remainder2+=string[i];
//   }      
//   console.log("remainder", remainder);
//   console.log("remainder2", remainder2);
//   document.querySelector('input').value = remainder;
//    document.querySelector('input').value = remainder2;      
// }
      else if(e.target.innerHTML=='%'){
  remainder = "";
  for(let i=0; i<string.length; i++){
    remainder += string[i];
  }
        string=" ";
  remlen  = remainder.length;
  console.log("remlen", remlen);
  for(let i=remlen+1; i<string.length; i++){
    remainder2 += string[i];
        }
  console.log("remainder", remainder);
  console.log("remainder2", remainder2);
      if(e.target.innerHTML=='='){   
  document.querySelector('input').value = remainder % remainder2;
      }
}


    else{
    console.log(e.target);
string=string+e.target.innerHTML;
document.querySelector('input').value=string;
    }
  })
})