// Initialize list
let todo = {
  list: [],
  interface: $(".listArea"),
  display: function(object) {
    this.interface.append("<li><span class=\"delete\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i></span><span class=\"todoItem\">" + object.text + "</span></li>")
  },
  add: function(text) {
    let item = new todoItem(text)
    this.list.push(item)
    this.display(item)
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
