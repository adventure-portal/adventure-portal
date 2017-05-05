import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/:username', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body_No_Login', { main: 'Home_Page' });
  },
});

FlowRouter.route('/:username/profile', {
  name: 'My_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Profile_Page' });
  },
});

FlowRouter.route('/:username/edit-my-profile-page', {
  name: 'Edit_My_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_My_Profile_Page' });
  },
});

FlowRouter.route('/:username/adventures', {
  name: 'Adventures_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Adventures_Page' });
  },
});

FlowRouter.route('/:username/details/:adventureID', {
  name: 'Details_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Details_Page' });
  },
});

FlowRouter.route('/:username/dashboard', {
  name: 'Dashboard_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Dashboard_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Not_Found', { main: 'App_Not_Found' });
  },
};
