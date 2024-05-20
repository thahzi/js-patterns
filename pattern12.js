// Pattern 12
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(i=1;i<=5;i++){
    str=''
    for(j=1;j<=5;j++){
        if(i==1 || j==1 || j==5 || i==5){
            str+='* '
        }
        else{
            str+='  '
        }
    }
    console.log(str);
}