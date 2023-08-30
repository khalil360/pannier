const panier = document.getElementById("panier");
const newlist = document.getElementById("product");

let x = +localStorage.getItem("counter");
panier.innerText = x;
//  * localStorage.setItem("counter") ;
// * localStorage.getItem("counter");

function moveToBuy(_item){
    const btn=document.getElementById(_item);
    btn.classList.add("disabled");
    btn.classList.add("bg-secondary");

    x +=1 ; 
    localStorage.setItem("counter",x);

   panier.innerText = x;

   if(localStorage.getItem(_item)){
    let nb = +localStorage.getItem(_item)+1;
    localStorage.setItem(_item,nb)
   }else{
    localStorage.setItem(_item,1);
   }
  
}



function resetPanier(){
    localStorage.clear();
    panier.innerText = 0;
    x = 0;
}


function showPanier(){
    const btn =document.getElementById('shows');
    btn.classList.remove('bg-warning');
    btn.setAttribute("disabled",true);
     
    let monPanier = Objet.entries(localStorage);
    let articles = monPanier.filter(element => element[0] !== "counter")

 //  let somme = monPanier.filter(element => element[0] === "counter")

   articles.map(el => {
let prod= document.createElement('li');
prod.innerText = `${el[0]}________NB : ${el[1]}`;
newlist.appendChild(prod)



   })
   Document.getElementById("somme").innerText = ` somme : ${somme[0][1]}`;
}