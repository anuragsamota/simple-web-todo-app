let i = -1;
//adding a to do
function createToDo(){
    i = i+1;
    let j = i;
    //creating list element
    let txtInput = document.getElementById("txtType").value;
    let list = document.createElement("LI");
    list.id =   "list" + j;
    //adding list element to ul
    let element = document.getElementById("todoli");
    element.appendChild(list);
    //adding a removing button
    let removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.className = "removeBtn";
    removeBtn.value = "Remove";
    removeBtn.id = "rmbtn" + j;
    removeBtn.onclick = BtnChecker;
    //adding to do
    list.append(txtInput);
    //adding button to list
    list.appendChild(removeBtn);
    
    //clearing the text field
    document.getElementById("txtType").value = ""; 
};

//clears all to do's
function clearallToDo(){
    i = -1;
    let list = document.getElementById("todoli");
    while (list.hasChildNodes()){
        list.removeChild(list.lastChild);
    };
};
//adding todo on button press
function addToDo(){
    let txtInput = document.getElementById("txtType").value;
    if(txtInput != ""){
        createToDo();
    }
    else{
        alert("Enter Todo")
    }
}
//clears a todo
function removeToDo(k){
    let list = document.getElementById("list"+k);
    list.remove();
};
function BtnChecker(){
    let x  = this.id;
    let y = x.match(/\d+/)[0];
    removeToDo(y);
}

