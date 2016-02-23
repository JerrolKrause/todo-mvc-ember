import Ember from 'ember';

export default Ember.Route.extend({  
	//Filter through the model and return all results that ARE marked complete
    model() {
        return this.store.filter('todo', function(todo) {
            return todo.get('complete');
        });
    },
    //Pass back to component
    renderTemplate(controller, model) {
        this.render('todos.index', {
            model: model
        });
    }
});