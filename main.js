
function addtekst(){
    let value =document.querySelector("#value").value
    let todo =document.querySelector("#todo")
    let list =document.createElement("li")
    // list.classList.add("")
    list.innerText=value

let deleteList=document.createElement("button")
deleteList.classList.add("remove")
deleteList.innerHTML="Удалить"
list.appendChild(deleteList)


todo.appendChild(list)
 deleteList.addEventListener("click",function(){
    todo.removeChild(list)
 })   
}