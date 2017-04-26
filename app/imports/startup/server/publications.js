import { Activities } from '/imports/api/activity/ActivityCollection';
import { Users } from '/imports/api/users/UsersCollection';

Activities.publish();
Users.publish();
