import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

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

FlowRouter.route('/profile', {
  name: 'My_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Profile_Page' });
  },
});

FlowRouter.route('/profile', {
  name: 'My_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Profile_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};








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