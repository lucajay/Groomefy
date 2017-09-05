import { Plans } from '../collections/plans.js';
if (Meteor.isClient) {
	Accounts.onLogin(function(){
	FlowRouter.go('/listPlan');
});

Accounts.onLogout(function(){
	FlowRouter.go('home');
});

}
FlowRouter.triggers.enter([function(context, redirect){
	if (!Meteor.userId()) {
		FlowRouter.go('home')
	}
}]);
FlowRouter.route('/', {
	name: 'home',
	action() {
		if (Meteor.userId()) {
			FlowRouter.go('/listPlan');
		}
		BlazeLayout.render('home')
	}
});
FlowRouter.route('/listPlan', {
	name: 'listPlan',
	action() {
		BlazeLayout.render('MainLayout', { main:'listPlan'})
	}
});
FlowRouter.route('/addPlan', {
	name: 'addPlan',
	action() {
		BlazeLayout.render('MainLayout', {main:'addPlan'})
	}
});