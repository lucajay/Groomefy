import { Meteor } from 'meteor/meteor';
// import '../collections/plans.js';
import { Plans } from '../collections/plans.js';


Plans.before.insert(function (userId, doc) {
  doc.visible_product_types = [];
  doc.details.product_ids = [];
  doc.details.style_ids = [];
  for (var i =0; i< doc.details.length; i++){
  	doc.visible_product_types.push(doc.details[i].product_type);
  };
  for(var i=0; i < doc.pricing_details.length; i++) {
	 doc.pricing_details[i].duration_months = doc.pricing_details[i].duration_months.replace("Monthly",1);
	 doc.pricing_details[i].duration_months = doc.pricing_details[i].duration_months.replace("Quaterly",3);
	 doc.pricing_details[i].duration_months = doc.pricing_details[i].duration_months.replace("Half-Yearly",6);
	 doc.pricing_details[i].duration_months = doc.pricing_details[i].duration_months.replace("Yearly",12);
	 doc.pricing_details[i].pricing_id = Meteor.uuid()
	}
});

Meteor.startup(() => {
  // code to run on server at startup
});
