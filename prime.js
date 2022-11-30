
function prime(){
 let n=13;
 let flag = true;
 if(n<=1){
 flag = false;
 }
 else{
  for(let i=2;i<n;i++){
      if(n%i==0){
      flag = false;
      break;
      }
  }
 }
 (flag) ? console.log("Yes") : console.log("No");
}