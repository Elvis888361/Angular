import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MY TODOAPP';
  todos=[{
    label:'Bring milk',
    done:false,
    priority:3
  },
  {
    label:'ngobeeeeeee',
    done:true,
    priority:1
  },
  {
    label:'clean the pak',
    done:false,
    priority:4
  },
  {
    label:'trio cheza kaa wewe',
    done:false,
    priority:5
  }
];
addTodo(newTodoLabel){
  var newTodo={
    label:newTodoLabel,
    priority:1,
    done:false
  };
  this.todos.push(newTodo);
}
deleteTodo(todo){
  this.todos=this.todos.filter(t=>t.label !==todo.label);
}
}
