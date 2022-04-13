const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");
let a=1;
btnCreateList.addEventListener("click", function(event)
{
    event.preventDefault();
    let list = document.createElement("div");
    let listName = document.getElementById("list-name").value;
    list.classList.add("list");
    let h2=document.createElement("h2");
    let img=document.createElement("img");
    img.setAttribute("src","img/pencil-edit-button-svgrepo-com.svg");
    img.setAttribute("alt","редактировать название списка");
    img.setAttribute("width","20px");
    if(listName==""){
        listName="Новый список "+a;
        a=a+1;
    }
    h2=listName;
    desk.append(list);
    list.append(h2);
    list.append(img);
}
)