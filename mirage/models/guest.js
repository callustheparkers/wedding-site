import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  booking: belongsTo(),
  meal: belongsTo()
});
