import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

/* eslint-disable no-console */

Template.Home_Page.events({
  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .ui.huge.button.login': function casLogin(event) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
    //Move to top of page
    window.scroll(0,0);
    return false;
  },

  /**
   * Handle the click on the logout link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .ui.huge.button.logout': function casLogout(event) {
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go('/');
    //Move to top of page
    window.scroll(0,0);
    return false;
  },
});
