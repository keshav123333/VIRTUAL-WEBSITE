let p=document.querySelector(".prev");
let n=document.querySelector(".next");

n.addEventListener("click",()=>{
    let item=document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(item[0]);

});
p.addEventListener("click",()=>{
    let item=document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(item[item.length-1]);
    
});
let item=document.querySelectorAll(".item");

// for(i of item){
//     i.addEventListener("click",function (){
//         let item=document.querySelectorAll(".item");
//         let h=this;
//         document.querySelector(".slide").insertBefore(h,item[1]);

//     });
// }

for(i of item){
    i.addEventListener("click",function (event){ let j=0;
        let item=document.querySelectorAll(".item");
         while(event.target!=item[j]){
             
                j++;
                if(j>1000){
                    break;
                }
         }
          

          
         for(let k=0;k<j-1;k++){
            console.log("for");
            document.querySelector(".slide").appendChild(item[k]);
            console.log(item)
         }

        
        // let h=this;
        // document.querySelector(".slide").insertBefore(h,item[1]);

    });
}

 


