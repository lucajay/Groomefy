import { Mongo } from 'meteor/mongo';
 
export const Plans = new Mongo.Collection('plans');

Plans.allow({
	insert:function(userId, doc){
		return !! userId;
	}
})

const PlanSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Plan Title"
	},
	description: {
		type: String,
		label: "Plan Description"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	},
	no_of_users: {
		type: Number,
		label: "Number of Users"
	},
	pricing_details: {
		type: Array,
		minCount:4,
		maxCount:4
	},
	"pricing_details.$": {
		type: Object
	},
	"pricing_details.$.duration_months":{
        type:String,
        label: "Select Plan",
        allowedValues: ['Monthly', 'Quaterly', 'Half-Yearly','Yearly'],
        optional: false
    },
    "pricing_details.$.price":{
        type: Number
    },
    product_type: {
    	type: String,
    	label: "Product Type"
    },
    is_deleted: {
    	type: Boolean,
    	autoValue: function(){
			return false
		},
		autoform: {
			type: "hidden"
		}
    },
    details: {
		type: Array,
		minCount:0,
		optional: true
	},
	"details.$": {
		type: Object,
	},
	"details.$.product_ids":{
        type:String,
        optional: true,
		autoform: {
			type: "hidden"
		}
    },
    "details.$.style_ids":{
        type: String,
        optional: true,
		autoform: {
			type: "hidden"
		}
    },
    "details.$.type": {
    	type: String,
    	optional: true,
    	allowedValues: ['Unlimited', 'Limited']
    },
    "details.$.product_type":{
        type:String,
        optional: true,
        label: "Product Type"
    }
});

// uncommment for schema debugging
// SimpleSchema.debug = true

Plans.attachSchema( PlanSchema ) ;