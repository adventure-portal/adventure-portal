import { Activities } from '/imports/api/activity/ActivityCollection';
import { Users } from '/imports/api/users/UsersCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';

Activities.publish();
Users.publish();
Interests.publish();
