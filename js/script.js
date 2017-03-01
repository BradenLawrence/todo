// Initialize list
let todo = {
    list: [],
    interface: $(".listArea"),
    add: function(text) {
        let item = new todoItem(text)
        this.list.push(item)
        let newestID = this.list.length-1
        this.display(newestID)   // Add the item we just created to the display list
    },
    display: function(num) {
        let text = this.list[num].text
        this.interface.append("<li id=\"todo" + num +  "\"><span class=\"delete hidden\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i></span><span class=\"todoItem\">" + text + "</span></li>")
        this.addListeners(num)
    },
    addListeners: function(num) {
        let id = "#todo" + num
        // Mouse click on todo item toggles text strikethrough
        $(id).click(function() {
            $(id).toggleClass("complete")
        })
    },
}

const todoItem = function(text) {
    this.text = text
}

// Add button toggles entry form visibility
let add = $(".add")
let formControl = $(".form-control")

add.click(function() {
    formControl.slideToggle(200)
})

// Pressing "Enter" on entry form creates a new todo item with the form's current text
formControl.keypress(function(event) {
    if (event.which === 13) { //13 === the 'Enter' key
        todo.add(formControl.val())
    }
})

// Mouse hover on todo item toggles delete button visibility



// Mouse click on delete button removes todo item
