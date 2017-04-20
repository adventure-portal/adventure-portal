import { Activities } from '../../api/activities/ActivitiesCollection.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const activitiesSeeds = [
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

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Activities.find().count() === 0) {
  _.each(activitiesSeeds, function seedActivities(stuff) {
    Activities.insert(stuff);
  });
}
