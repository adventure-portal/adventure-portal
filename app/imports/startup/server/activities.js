import { Activity } from '../../api/activities/ActivitiesCollection.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */


const activitySeeds = [
  {
    title: 'Waikiki Beach',
    location: 'Waikiki',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    interests: 'tanning',
    picture: '/images/manoafalls.jpg',
    description: 'Manoa is whats up right now',
  },
 /* {
    title: 'Manoa Falls',
    location: 'Manoa',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    interests: ['Hike', 'Waterfalls'],
    picture: '/images/waikiki.jpg',
    description: 'WAikiki is whats up right now',
  },*/
  {
    title: 'Sandy Beach',
    location: 'Makapuu',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    interests: 'dying',
    picture: '/images/sandy.jpg',
    description: 'Sandys is whats up right now',
  },
 /* {
    title: 'Manoa Falls',
    location: 'Manoa',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    picture: '/images/manoafalls.jpg',
    description: 'Manoa is whats up right now',
  },*/
];

/* const activitySeeds = [
  {
    title: 'Manoa Falls',
    location: 'Manoa',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    description: 'Manoa is whats up right now',
  },
  {
    title: 'Manoa Falls',
    location: 'Manoa',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    description: 'Manoa is whats up right now',
  },
  {
    title: 'Manoa Falls',
    location: 'Manoa',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    description: 'Manoa is whats up right now',
  },
  {
    title: 'Manoa Falls',
    location: 'Manoa',
    hours: '8AM - 4PM',
    cost: '$0',
    rating: '4 Stars',
    description: 'Manoa is whats up right now',
  },
];
*/
/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Activity.find().count() === 0) {
  _.each(activitySeeds, function seedActivities(stuff) {
    Activity.define(stuff);
  });
}
