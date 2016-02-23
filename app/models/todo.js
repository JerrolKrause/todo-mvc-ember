import DS from 'ember-data';

//Needed by mirage to simulate data
export default DS.Model.extend({
  title: DS.attr('string'),
  complete: DS.attr('boolean')
});
