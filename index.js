//Variables from HTML doc//
var form = document.getElementById("add-todo")
var itemlist = document.getElementById("todo-list")
var input = document.querySelector('input')
//Need an event form//
form.onsubmit = function(event){
    event.preventDefault()
    var item = document.querySelector('input').value
    //remove blank entries//
    if(item.trim() !== ""){
        
        var button = document.createElement("button")
        var list = document.createElement("li")
        button.textContent = item;
        //add items to list//
       itemlist.appendChild(list)
        list.appendChild(button)
    input.value = ""
        var count = 0;
        //clicking on list item function//
        button.addEventListener('click', e => {
            count++
            //if one click, strike through//
            if (count === 1) {
                button.style.textDecoration = 'line-through'
                //if two clicks, erase//
            } else if (count === 2) {
                list.removeChild(button)
            }
        })    
        //reset if nothing is entered
        } else{
            form.reset()
            return 
        } 
    }