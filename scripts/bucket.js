// On clicking remove button the item should be removed from DOM as well as localstorage.
let data= JSON.parse(localStorage.getItem("coffee"));
append(data);

function append(data){
    let sum= 0;
    document.getElementById("bucket").innerHTML=null;
    data.map((el,i)=>{
        let div= document.createElement("div");
        let img= document.createElement("img");
        img.src= el.image;
        let h2= document.createElement("h2");
        h2.innerText= el.title;
        let h3= document.createElement("h3");
        h3.innerText= el.price;
        sum+= +el.price;
        let button= document.createElement("button");
        button.innerText="Remove Item";
        button.setAttribute("id","remove_coffee");
        button.addEventListener("click",()=>{
            removeItem(i);
        })
        div.append(img,h2,h3,button);
        document.getElementById("bucket").append(div);
    });
    document.getElementById("total_amount").innerText=sum;
}

function removeItem(i){
    data.splice(i,1);
    localStorage.setItem("coffee",JSON.stringify(data));
    append(data);
}

document.getElementById("confirm_checkout").addEventListener("click",()=>{window.location.href="./checkout.html"});