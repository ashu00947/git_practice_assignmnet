
    
   function palindrome(){
     let str = "AbbA";
     let new_str="";
    for(let i=str.length-1; i>=0; i--){
        new_str = new_str + str[i];
    }
  if(str==new_str){
      console.log("Yes");
  }
  else{
      console.log("No");
  }
}

