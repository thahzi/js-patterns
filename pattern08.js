// Pattern 8
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

n=10
for(i=1;i<=n;i++){
    str=''
    for(j=1;j<=i;j++){
        if(i<= (n/2)){
            str+= ` *`
        }
        if(i>(n/2)){
            for(j=i+1;j<=n;j++){
                       str+= ` *` 
                    }
        }
        
       
    }
    console.log(str);
}