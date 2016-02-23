import Ember from 'ember';

export default Ember.Component.extend({  
    actions: {
    	//Submits new TODO to add to the model
        submitTodo(newTitle) {
            if (newTitle) {
                this.sendAction('action', newTitle);
            }
            this.set('newTitle', '');
        }
    }
});