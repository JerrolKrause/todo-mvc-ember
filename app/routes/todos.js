import Ember from 'ember';

export default Ember.Route.extend({  
   model() {
        return this.store.findAll('todo');
    },
    actions: {
    	//Create new todo item
        createTodo(newTitle) {
           this.store.createRecord('todo', {
               title: newTitle,
               complete: false
           }).save();
        },
        //Save current todo item
        updateTodo(todo) {
            todo.save();
        },
        //Delete/remove todo item
        deleteTodo(todo) {
            todo.destroyRecord();
        }
    }
});