import firebase, {firebaseRef,githubProvider} from 'app/firebase/';
import moment from 'moment';

export var UpdateClient = (id, updates) => {
  return {
    type: 'UPDATE_CLIENT',
    id,
    updates
  }
};
