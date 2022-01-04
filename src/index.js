module.exports = function toReadable (number) {
  let str="";
  let toTwenty=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let teens=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  if (!number) return "zero";
  if(number%100<20) {
    str=toTwenty[number%20-1];}
  else if(number%10==0&&number) {
    str=teens[Math.floor((number%100)/10-2)];}
  else{
    str=teens[Math.floor((number%100)/10-2)]+" "+ toTwenty[number%10-1];
  }
  if (number>=100){
    if(number%100==0){
      str=toTwenty[Math.floor(number/100)-1]+ " hundred ";
    }
    else{
    str=toTwenty[Math.floor(number/100)-1]+ " hundred "+ str;
    }
  }
  if (str[str.length-1]==" ") str=str.slice(0,str.length-1);
  return str;
}
