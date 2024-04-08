// get or catch elements here
let input = document.getElementsByTagName("input")[0];
let button = document.getElementsByTagName("button")[0];
let list = document.getElementsByTagName("ul")[0];
let span = document.createElement("span")

// function add task 
function add(){
    if(input.value === ''){
        alert("you must add your task you make it");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value
        list.appendChild(li) 

        // this to make remove button
            let remove = document.createElement("span");
            remove.innerHTML ="";
            remove.classList.add("remove");
            remove.addEventListener("click", function(){
                list.removeChild(li)
            })
            li.appendChild(remove)
        
    }
    input.value=''
}

// make what i want in click
button.addEventListener("click", add)


// make function checked

function check(event){
    if(event.target.tagName= "li"){
        event.target.classList.toggle("checked")
    }else {
        
    }
}
list.addEventListener("click", check)




