import Ember from 'ember';

export default Ember.Component.extend({  

	//Compute the number of unfinished tasks by filtering by 'complete'
    remaining: Ember.computed('todos.@each.complete', function() {
        let todos = this.get('todos');
        return todos.filterBy('complete', false).get('length');
    }),
    //Figure out if we need to use the plural or singlar version of 'item'
    inflection: Ember.computed('remaining', function() {
        let remaining = this.get('remaining');
        return (remaining === 1) ? 'item' : 'items';
    }),
    //Get the number of completed todos
    completed: Ember.computed('todos.@each.complete', function() {
        var todos = this.get('todos');
        return todos.filterBy('complete', true).get('length');
    }),
    //Return true/false if ANY tasks have been completed. Returns false if NO tasks completed, otherwise true
    hasCompleted: Ember.computed('completed', function() {
        return this.get('completed') > 0;
    }),
    //Check if all the todo's are completed, toggle the allAreDone property
    didInsertElement() {
        let todos = this.get('todos');
        if (todos.get('length') > 0 && todos.isEvery('complete', true)) {
            this.set('allAreDone', true);
        } else {
            this.set('allAreDone', false);
        }
    },
    //Watches the allAreDone property
    //If this property is set to true, loop through all the todo's and set the checkboxes to checked
    allAreDoneObserver: Ember.observer('allAreDone', function() {
        let completeValue = this.get('allAreDone');
        let todos = this.get('todos');
        todos.forEach((todo) => {
            todo.set('complete', completeValue)
            this.sendAction('updateTodo', todo);
        });
    }),
    actions: {
    	//If the user clicks the 'Clear Completed' button, delete all completed todos
        clearCompleted() {
            let completed = this.get('todos').filterBy('complete', true);
            completed.forEach((todo) => {
                this.sendAction('deleteTodo', todo);
            });
        }
    }

});