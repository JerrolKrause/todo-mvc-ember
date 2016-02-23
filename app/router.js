import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	//Main todo's homepage
     this.route('todos', { path: '/' }, function() {
       this.route('complete');		//Shows only todo's marked completed
       this.route('incomplete');	//Shows only todo's marked NOT completed
     });
});


export default Router;
