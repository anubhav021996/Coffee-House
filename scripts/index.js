// Add the coffee to local storage with key "coffee"
document.getElementById("buc").addEventListener("click",()=>{window.location.href="./bucket.html"});
let data= JSON.parse(localStorage.getItem("coffee")) || [];
document.getElementById("coffee_count").innerText= data.length;

async function getData(){
    let res= await fetch("https://masai-api.herokuapp.com/coffee/menu");
    let data= await res.json();
    console.log(data.menu.data);
    append(data.menu.data);
}

getData();

function append(data){
    data.map((el)=>{
        let div= document.createElement("div");
        let img= document.createElement("img");
        img.src= el.image;
        let h2= document.createElement("h2");
        h2.innerText= el.title;
        let h3= document.createElement("h3");
        h3.innerText= el.price;
        let button= document.createElement("button");
        button.innerText="Add to Bucket";
        button.setAttribute("id","add_to_bucket");
        button.addEventListener("click",()=>{
            addToBucket(el);
        })
        div.append(img,h2,h3,button);
        document.getElementById("menu").append(div);
    });
}

function addToBucket(el){
    data= JSON.parse(localStorage.getItem("coffee")) || [];
    data.push(el);
    localStorage.setItem("coffee",JSON.stringify(data));
    document.getElementById("coffee_count").innerText= data.length;
}

