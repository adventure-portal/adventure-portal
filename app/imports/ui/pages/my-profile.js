import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users } from '/imports/api/users/UsersCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';
import { Activities } from '/imports/api/activity/ActivityCollection';


Template.My_Profile_Page.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
  this.subscribe(Activities.getPublicationName());
  this.context = Users.getSchema().namedContext('My_Profile_Page');
});

Template.My_Profile_Page.helpers({
  profile() {
    return Users.findDoc(FlowRouter.getParam('username'));
  },
  interests() {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const selectedInterests = userProfile.interests;
    return userProfile && _.map(Interests.findAll(),
            function makeInterestObject(interest) {
              return { label: interest.name, selected: _.contains(selectedInterests, interest.name) };
            });
  },
});
Template.My_Profile_Page.events({
  /* Favorite event on clicking heart */
  'click .heart': function favoriteActivity(event) {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const newFavorite = this.activity;
    event.preventDefault();
    console.dir(userProfile.pinnedActivities);
    if (_.findWhere(userProfile.pinnedActivities, newFavorite)) {
      Users.update({ _id: userProfile._id }, { $pull: { pinnedActivities: { _id: newFavorite._id } } },);
      console.dir(userProfile.pinnedActivities);
    } else {
      if (userProfile.pinnedActivities === null) {
        Users.update({ _id: userProfile._id }, { $set: { pinnedActivities: [] } });
      }
      Users.update({ _id: userProfile._id }, { $push: { pinnedActivities: newFavorite } });
    }
  },
});
