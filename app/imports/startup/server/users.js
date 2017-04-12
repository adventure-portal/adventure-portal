import { Users } from '../../api/users/UsersCollection.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Users to pre-fill the Collection.
 * @type {*[]}
 */
const usersSeed = [
  {
    firstName: 'John',
    lastName: 'Doe',
    username: 'jdoe',
    email: 'jdoe@example.com',
    bio: 'Born and Raised in hawaii.',
    interests: ['Surfing', 'Hiking'],
    currentActivities: ['White Plains', 'Diamond Head'],
    picture: 'http://www.jdoe.com/profile.png',
  },
  {
    firstName: 'Joe',
    lastName: 'Dohn',
    username: 'jdohn',
    email: 'jdohn@example.com',
    bio: 'Born and Raised in Cali.',
    interests: ['Rock Climbing', 'Paddling'],
    currentActivities: [''],
    picture: '',
  },
];

/**
 * Initialize the Users collection if empty with seed data.
 */
if (Users.find().count() === 0) {
  _.each(usersSeed, function seedUsers(user) {
    Users.insert(user);
  });
}
