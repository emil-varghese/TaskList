import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB3TKdagSMHo3nZ_5CNW-E32rjXqDgJX7o",
  authDomain: "tasklist-1e92a.firebaseapp.com",
  databaseURL: "https://tasklist-1e92a.firebaseio.com",
  storageBucket: "tasklist-1e92a.appspot.com",
  messagingSenderId: "648761793516"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set ({
  clients: {},
  status: {},
  users: {},
  location: [{location: 'Offshore'},{location: 'Onshore'},{location: 'Onsite'},{location: 'Nearshore'}],
  resources: [{resource: 'Emil Varghese'}, {resource: 'Surya Panda'}],
  taskType: [{type: 'Development'},{type: 'Support'}],
  taskName:{}
}).then ( () => {
  console.log('Success');
}, (e) => {
  console.log('Failed');
});


var clientsRef = firebaseRef.child('clients');
var statusRef = firebaseRef.child('status');
var usersRef = firebaseRef.child('users');
var locationRef = firebaseRef.child('location');
var resourcesRef = firebaseRef.child('resources');
var taskTypeRef = firebaseRef.child('taskType');
var taskNameRef = firebaseRef.child('taskName');

var clientsId = clientsRef.push({name: 'Emtek'});
clientsId = clientsRef.push({name: 'PWB'});
console.log('clientsRef',clientsId.key)

var statusId = statusRef.push([{status: '2 - In Development'},{status: '1 - Requirements'}]);
console.log('status id',statusId.key);

firebaseRef.child(`status/${statusId.key}`).once('value').then ( (snapshot) => {
  console.log('Got Data', snapshot.key, snapshot.val());

  var currentData = [...snapshot.val(),{staus: '3 - User Testing'}];
  statusRef.set({...currentData
  }).then ( () => {
    console.log('Inserted');
  }, (e) => {
    console.log('Insert Failed');
  });

  snapshot.forEach( (childsnapShot) => {
    console.log('Key is' ,childsnapShot.key);
    console.log('Value is',childsnapShot.val());
  });

}, (e) => {
  console.log('error');
});

firebaseRef.child(`status/${statusId.key}/0/status`).once('value').then ( (snapshot) => {
  console.log('Got child status', snapshot.key, snapshot.val());
}, (e) => {
  console.log('error');
});

var clientName;
firebaseRef.child(`clients/${clientsId.key}/name`).once('value').then((snapshot) => {
    console.log('Client', snapshot.key, snapshot.val());
    clientName = snapshot.val();
    return clientName;
}, (e) => {
    console.log('error');
}).then((clientName) => {
    taskNameRef.set({clientId: clientsId.key, clientName: clientName});
    taskNameRef.child('task').push({
      taskname: 'Tableau EBS Solution',
      taskType: 'Development',
      taskResource: 'Emil Varghese',
      taskStatus: '2 - In Development',
      location: 'Offshore',
      resource1: 'Emil Varghese',
      resource2: 'Surya Panda'
    });
});
