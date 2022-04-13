let h1 = document.getElementById("main");
console.log(h1.innerHTML);
console.log(h1.textContent)
h1.innerHTML="Новая <i>страница</i>";
h1.classList.add("red");
h1.classList.add("big");

let p = document.querySelectorAll("p");
for(let elem of p){
    /*if(elem.classList.contains("block")){
        elem.classList.remove("block");
    }
    else{
        elem.classList.add("block");
    }*/
    elem.classList.toggle("block");
    elem.style.color="green";
    elem.style.fontSize="20px";
}

let image = document.querySelector("img");
image.setAttribute("style", "border: solid black 5px; width:200px");
image.setAttribute("src", "img/cross2.jpg");
console.log(image.getAttribute("src"));


/*------------создать новый тег------------*/
let newA = document.createElement("a");
newA.textContent="новая ссылка";
newA.setAttribute("href","https://midis.ru/");

h1.before(newA);

/*------------предки и потомки--------------*/
let list = document.querySelector(".list");
console.log(list.querySelectorAll("a"));

let a=document.querySelector('.list a');
console.log(a);
console.log(a.closest(".list"));