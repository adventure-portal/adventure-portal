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

FlowRouter.route('/:username/adventures', {
  name: 'Adventures_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Adventures_Page' });
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









FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/admin-login', {
  name: 'Admin_Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Login_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});
FlowRouter.route('/add-activity', {
  name: 'Add_Activity_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Activity_Page' });
  },
});