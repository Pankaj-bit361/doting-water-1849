let servings =['2','4'];
let meals = ['2','3','4'];
let pps = 0
let shipping = 9.99
for(let i = 0;i<servings.length;i++){
    let subTotal = 0;
    for(let j=0;j<meals.length;j++){
        if(servings[i]==2 && meals[j]==2){
            pps = 11.99;
            subTotal = 2*(2*pps)+shipping;
        }
         if(servings[i]==2 && meals[j]==3){
            pps = 9.99;
            subTotal = 2*(2*pps)+shipping; 
        }
         if(servings[i]==2 && meals[j]==4){
            pps = 9.49;
            subTotal = 2*(2*pps)+shipping; 
        }
    }
    console.log(subTotal);

}