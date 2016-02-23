import Ember from 'ember';

export default Ember.Component.extend({  
    tagName: 'li',					//Wraps this element in an LI tag
    classNameBindings: ['editing'],	//Adds this class to the parent element
    editing: false,					//Boolean passed to the template to determine what to show
    actions: {
    	//Toggles the editing property in this component
    	//This property updates the template to show an editable input box
        editTodo() {
            this.toggleProperty('editing');
        },
        //Sends the updated text to the model, deletes if no next is sent
    	submitTodo() {
	        let todo = this.get('todo');
	        if (todo.get('title') === "") {
	            this.sendAction('deleteTodo', todo);
	        } else {
	            this.sendAction('updateTodo', this.get('todo'));
	        }
	        this.set('editing', false);
	    },
	    //Deletes this node
	    //Bubbles the action up to deleteTodo on the routing file
	    deleteTodo() {
	        let todo = this.get('todo');
	        this.sendAction('deleteTodo', todo);
	    }
    }
});