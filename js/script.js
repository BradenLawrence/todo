// Initialize list
let todo = {
  list: [],
  add: function(text) {
    this.list.push(new todoItem(text))
  }
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
    if(event.which === 13) {    //13 === the 'Enter' key
        todo.add(formControl.val())
    }
})

// Mouse hover on todo item toggles delete button visibility



// Mouse click on todo item toggles text strikethrough



// Mouse click on delete button removes todo item
