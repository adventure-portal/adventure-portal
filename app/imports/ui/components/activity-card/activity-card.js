import { Template } from 'meteor/templating';
import { Users } from '/imports/api/users/UsersCollection';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

Template.Activity_Card.events({
  /* Favorite event on clicking heart */
  'click .heart': function favoriteActivity(event) {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const newFavorite = this.activity;
    event.preventDefault();
    if (_.findWhere(userProfile.pinnedActivities, newFavorite)) {
      Users.update({ _id: userProfile._id }, { $pull: { pinnedActivities: { _id: newFavorite._id } } });
    } else {
      if (userProfile.pinnedActivities === null) {
        Users.update({ _id: userProfile._id }, { $set: { pinnedActivities: [] } });
      }
      Users.update({ _id: userProfile._id }, { $push: { pinnedActivities: newFavorite } });
    }
  },

});
