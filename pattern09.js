// Pattern 9
//      *
//    *   *
//   *  *  *
// *  *   *   *
for (i = 1; i <= 4; i++) {
    str ='';
    for(space = 4; space>i ; space--){
        str+= ' '
    }
    for(j=1;j<=i;j++){
        str+=' *'
    }

    console.log(str);
}