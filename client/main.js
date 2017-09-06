import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Plans } from '../collections/plans.js';

Template.addPlan.events({
	'click button[type="submit"]'(){
		alert("Saving Plan")
	}
});
Template.plans.helpers({
  plans:()=>{
    return Plans.find({}).fetch();
  },
  counter: (index)=>{
    return index + 1;
	}
});
window.Plans = Plans;
