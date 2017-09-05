import { Plans } from '../collections/plans.js';

Meteor.publish('plans', function(){
	return Plans.find({author: this.userId});
});