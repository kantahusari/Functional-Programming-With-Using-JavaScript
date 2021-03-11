function f1(num) {
    let space= "";
    let set="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&?@[/]^{|}~";
    for (let i = 0; i < num; i++)
    space+= set.charAt(Math.floor(Math.random()*set.length));
    return space;
    }
function f2(str){
    let len=str.length;
    let space="";
    for (let i=0; i<len; i++){
        let pos=str.charCodeAt(i);
        let poss=str.charAt(i);
        if(pos>=65&&pos<=90){
            space+=poss;
        }
        if(pos>=48&&pos<=57){
            space+=poss; 
        }
        if(pos>=97&&pos<=122){
            space+=String.fromCharCode(pos-32);
        }
    } 
    return space;
}
function f3(str,numSpace){
    for(let i=0;i<numSpace;i++){
    str=" "+str+" ";
    }
    return str;
}
function f4(str,pos){
    let len=str.length;
    let space="";
    if(pos==="odd"){
        for(let i=0; i<len; i++){
            let posnum=str.charCodeAt(i);
            let posch=str.charAt(i);
            if(i%2==0){
                if(posnum>=97&&posnum<=122){
                    space+=String.fromCharCode(posnum-32);
                }
                if(posnum>=65&&posnum<=90){
                    space+=String.fromCharCode(posnum+32);
                }
                if(posnum>=48&&posnum<=57){
                    space+=posch;
                }
            }else{
                space+=posch;
            }
        }
    }
    if(pos==="even"){
        for(let i=0; i<len; i++){
            let posnum=str.charCodeAt(i);
            let posch=str.charAt(i);
            if(i%2!==0){
                if(posnum>=97&&posnum<=122){
                    space+=String.fromCharCode(posnum-32);
                }
                if(posnum>=65&&posnum<=90){
                    space+=String.fromCharCode(posnum+32);
                }
                if(posnum>=48&&posnum<=57){
                    space+=posch;
                }
            }else{
                space+=posch;
            }
        }
    }
    return space;
}
function f5(str) {
    let space = "";
    for (let i = str.length - 1; i >= 0; i--) {
        space += str[i];
    }
    return space;
}
function f6(str1,str2){
    let spase="";
    len= Math.max(str1.length,str2.length)
    for(let i = 0; i <len; i++){
      spase+= str1.charAt(i);
      spase+= str2.charAt(i);
    }
    return spase;
  }
function f7(str) {
    let test = false;
    let space = "";
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i)!==" "&&str.charAt(i)!=="\t"&&str.charAt(i)!=="\n"){
            test = true;
        }
        if(test){
            space += str[i];
        }
    }
    return space;
}
function f8(str) {
    let re = /^\s*(\S[\S\s.]*\S)\s*$/gm;
    let b = re.exec(str);
    return (b !== null) ? (re.exec(str),b[1]) : '';
} 
function f9(array1,array2){
    var c=[...array1,...array2];
    return c;
}
function f10(array,num){
    for(let i=0; i<array.length; i++){
        if(isNaN(array[i])){
            return true;
        }
        if(array[i]<=num){
            return false;
        }
        else{
            continue;
        }
    }
    if(array[array.length-1]>num){
        return true;
    }
}
