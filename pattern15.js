// Pattern 15
//             11
//          12 13 14
//       15 16 17 18 19
//    20 21 22 23 24 25 26 
// 27 28 29 30 31 32 33 34 35


num = 11

for(i=1;i<=5;i++){
    str=''
    for(space=1;space<=5-i;space++){
        str+='***'
    }

    for(j=1;j<=(2*i-1);j++){
        str= str + num + ' '
        num++
    }   
 console.log(str);
}