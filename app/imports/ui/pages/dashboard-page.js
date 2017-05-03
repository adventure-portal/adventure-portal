import { Template } from 'meteor/templating';
import { Activities } from '/imports/api/activity/ActivityCollection';
import { Users } from '/imports/api/users/UsersCollection';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Dashboard_Page.onCreated(function onCreated() {
  this.subscribe(Activities.getPublicationName());
});

Template.Dashboard_Page.helpers({

  /**
   * Returns a cursor to activities, sorted by activity name.
   */
  activities() {
    return Activities.find({}, { sort: { title: 1 } });
  },
});

Template.Dashboard_Page.events({
  /* Favorite event on clicking heart */
  'click .heart': function favoriteActivity(event) {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const activityId = this.activity._id;
    event.preventDefault();
    if (_.contains(userProfile.pinnedActivities, activityId)) {
      Users.update({ _id: userProfile._id }, { $pull: { pinnedActivities: activityId } });
    } else {
      if (userProfile.pinnedActivities === null) {
        Users.update({ _id: userProfile._id }, { $set: { pinnedActivities: [] } });
      }
      Users.update({ _id: userProfile._id }, { $push: { pinnedActivities: activityId } });
    }
  },

});
