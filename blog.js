let mainPageEl = document.getElementById("main-page")

let homeEl = document.getElementById("home");
let aboutEl = document.getElementById("about");
let topicsEl = document.getElementById("topics");
let helpEl = document.getElementById("help");





let aboutIdEl = document.getElementById("aboutID")
let buttonAboutEl = document.getElementById("about-button")



let HuffIDel = document.getElementById("huffID")
let boingDel = document.getElementById("BoingID")
let grillodel = document.getElementById("GrilloID")
let treeDel = document.getElementById("treeID")

let deleteButton1 = document.getElementById("button-delete1")
let deleteButton2 = document.getElementById("button-delete2");
let deleteButton3 = document.getElementById("button-delete3");
let deleteButton4 = document.getElementById("button-delete4");
let buttonbackEl = document.getElementById("button-back");
let topicsidEl = document.getElementById("topicsId")


let maincontainerEl = document.getElementById("main-container")

deleteButton1.onclick = function() {
    HuffIDel.classList.add("d-none")
}

deleteButton2.onclick = function() {
    boingDel.classList.add("d-none")
}

deleteButton3.onclick = function() {
    grillodel.classList.add("d-none")
}

deleteButton4.onclick = function() {
    treeDel.classList.add("d-none")
}




topicsEl.onclick = function() {
    mainPageEl.classList.add("d-none");
    // aboutIdEl.classList.add("d-none")
    topicsidEl.classList.remove("d-none")

}

buttonbackEl.onclick = function() {
    topicsidEl.classList.add("d-none");
    mainPageEl.classList.remove("d-none")
}

let outputEl = document.getElementById("review-container")
let buttonEl = document.getElementById("button")



let createblogbtn = document.getElementById("createblog");

let bgconatinerEl = document.getElementById("bgcontainer")
createblogbtn.onclick = function() {
    mainPageEl.classList.add("d-none");
    bgconatinerEl.classList.remove("d-none")

}


let inputareaEl = document.getElementById("input-area");
let inputareaEl2 = document.getElementById("input-area2");
let contentareaEl = document.getElementById("text-content");
let buttonAddblog = document.getElementById("button-local");
let buttonloginback = document.getElementById("BackID")
let newblogEl = document.getElementById("newblog");


buttonloginback.onclick = function() {
    bgconatinerEl.classList.add("d-none");
    mainPageEl.classList.remove("d-none")
    inputareaEl.value = "";
    contentareaEl.value = "";
}


todoList = []


function onDeleteTodo(todoId) {
    let listEl = document.getElementById(todoId)
    newblogEl.removeChild(listEl)
    let indexing = todoList.findIndex(function(item) {
        let itemId = "todo" + item.uniqueNo
        if (itemId === todoId) {
            return true
        } else {
            return false
        }

    })

    // console.log(indexing) 
    todoList.splice(indexing, 1)

}

function createAndAppendTodo(todo) {

    let todoId = "todo" + todo.uniqueNo
    let cont = document.createElement("div");
    cont.classList.add("del-padd")
    cont.id = todoId

    let head = document.createElement("h1")
    head.textContent = "*." + todo.headtext
    head.classList.add("blog-head")
    cont.appendChild(head)
    newblogEl.appendChild(cont)



    let img2 = document.createElement("img")
    img2.src = todo.text2
    img2.classList.add("img")
    cont.appendChild(img2)
    newblogEl.appendChild(cont)

    let para = document.createElement("p")
    para.textContent = todo.text
    para.classList.add("blog-para")
    cont.appendChild(para)
    newblogEl.appendChild(cont)




    let deleteCont = document.createElement("div")
    deleteCont.classList.add("pb-4")
    cont.appendChild(deleteCont)

    let deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete"
    deletebtn.classList.add("btn", "button", "btn-info")
    deletebtn.onclick = function() {
        onDeleteTodo(todoId)

    }
    deleteCont.appendChild(deletebtn)


}


function onAddTodo() {
    let newhead = inputareaEl.value
    let input2value = inputareaEl2.value
    let paraa = contentareaEl.value
    let newNo = todoList.length
    // console.log(newNo)
    if (newhead === "" || paraa === "" || input2value === "") {
        alert("Enter a valid Text")

    } else {
        bgconatinerEl.classList.add("d-none")
        topicsidEl.classList.remove("d-none")
    }
    let newTodo = {
        headtext: newhead,
        text: contentareaEl.value,
        text2: inputareaEl2.value,
        uniqueNo: newNo + 1,
        // isChecked: false
    }
    // console.log(newTodo) 
    todoList.push(newTodo)
    createAndAppendTodo(newTodo)
    // console.log(todoList)
    inputareaEl.value = ""
    contentareaEl.value = ""
    inputareaEl2.value = ""

}

buttonAddblog.onclick = function() {
    onAddTodo()
    // bgconatinerEl.classList.add("d-none")
    // topicsidEl.classList.remove("d-none")

}