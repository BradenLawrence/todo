// Initialize list
let todo = {
    list: [],
    interface: $(".listArea"),
    add: function(text) {
        let item = new todoItem(text)
        this.list.push(item)
        this.display(item.id, item.text)
    },
    display: function(num, text) {
        this.interface.append("<li id=\"todo" + num + "\"><span class=\"delete\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i></span><span class=\"todoItem\">" + text + "</span></li>")
        this.addListeners(num)
    },
    addListeners: function(num) {
        let id = "#todo" + num
        // Mouse click on todo item toggles text strikethrough
        $(id).click(function() {
            $(id).toggleClass("complete")
            todo.list[num].setStatus("complete")
        })
        // Mouse click on delete button removes todo item
        $(id).children("span.delete").click(function() {
            $(id).slideUp(200, function() {
                $(id).remove()
                todo.list[num].setStatus("removed")
            })
        })
    }
}

let todoCounter = 0
const todoItem = function(text) {
    this.text = text
    this.status = "incomplete"
    this.id = todoCounter
    todoCounter++
    this.setStatus = function(text) {
        if (text === "complete" || text === "incomplete" || text === "removed") {
            this.status = text
        }
    }
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
        if(formControl.val() === "") {
            // Do nothing, cannot submit a blank todoItem
        } else {
        todo.add(formControl.val())
        formControl.val("")
      }
    }
})

// Clicking on the entry form clears default text
let defaultTextValue = "Enter your task..."

formControl.focusin(function() {
    if (formControl.val() === defaultTextValue) {
        formControl.val("")
        formControl.removeClass("defaultText")
    }
})

formControl.focusout(function() {
    if (formControl.val() === "") { // Don't revert to default text if the user has started typing something.
        initializeForm()
    }
})

const initializeForm = function() {
    formControl.val(defaultTextValue)
    formControl.addClass("defaultText")
}
initializeForm()
