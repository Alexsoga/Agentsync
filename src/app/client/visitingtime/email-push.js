const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.firestoreEmail = functions.firestore
    .document('users/{userId}/followers/{followerId}')
    .onWrite((change, context) => {

        const userId = context.params.userId;

        const db = admin.firestore()

        return db.collection('users').doc(userId)
                 .get()
                 .then(doc => {

                    const user = doc.data()

                    const msg = {
                        to: user.email,
                        from: 'elena@sonderworks.com',
                        subject:  user.subject,
                        // text: `Hey ${toName}. You have a new follower!!! `,
                        // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,
            
                        // custom templates
                        templateId: 'd-e1289d68c3e94863b97e9d63b1dad90c',
                        substitutionWrappers: ['{{', '}}'],
                        substitutions: {
                          name: user.displayName,
                          number:user.phonenumber
                          // and other custom properties here
                        }
                    };

                    return sgMail.send(msg)
                })
                .then(() => console.log('email sent!') )
                .catch(err => console.log(err) )
                     

});







    <div>
<div style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; color: rgb(0, 0, 0);">Hello Alex Pandiyan</div><br>


<div style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; color: rgb(0, 0, 0);">Your Order has been placed.&nbsp; Please see below the order details</div><br>


<div style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; color: rgb(0, 0, 0);"><strong>Building</strong> <strong>:</strong> Home<br><br>

<strong>Squarefeet</strong> <strong>:</strong>0-750<br><br>

<strong>Address</strong> <strong>:</strong>No.7 Second Main Road, Jagath Complex, Chrompet, 60044,<br><br>

<strong>Products</strong><br>
Photography<br>
Tour 360<br>
Video Tour<br><br>

<strong>Photography Addons</strong><br>
Community shot<br>
Twlight Shot<br><br>

<strong>Video Addons</strong><br>
Community Shots<br>
Twlight Shots<br><br>

<strong>Meet agent on site</strong><br><br>

<strong>Date and Time</strong> <strong>:</strong>Apr 22, 2019, 10:00:00 AM<br><br>

<strong>Comments</strong> <strong>:</strong>My Orders</div>

<div style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; color: rgb(0, 0, 0);">&nbsp;</div>

<div style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; color: rgb(0, 0, 0);">&nbsp;</div>

<div style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; color: rgb(0, 0, 0);">&nbsp;</div>

<div style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; color: rgb(0, 0, 0);">&nbsp;</div>
</div>







const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.firestoreEmail = functions.firestore
    .document('users/{userId}/followers/{followerId}')
    .onWrite((change, context) => {

        const userId = context.params.userId;

        const db = admin.firestore()

        return db.collection('users').doc(userId)
                 .get()
                 .then(doc => {

                    const user = doc.data()

                    const msg = {
                        to: user.email,
                        from: 'elena@sonderworks.com',
                        subject:  user.subject,
                        text: ` You have a new follower!!! `,
                        html: `<strong>Hey  You have a new follower!!!</strong>`,
            
                        // custom templates
                        templateId: 'd-e1289d68c3e94863b97e9d63b1dad90c',
              
                       dynamic_template_data: {
    subject: 'Testing Templates',
    name: user.displayName,
    
  },
                    };

                    return sgMail.send(msg)
                })
                .then(() => console.log('email sent!') )
                .catch(err => console.log(err) )
                     

});



    home:





    const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.firestoreEmail = functions.firestore
    .document('users/{userId}/followers/{followerId}')
    .onWrite((change, context) => {

        const userId = context.params.userId;

        const db = admin.firestore()
          const start=new Date(Date.now());
   start.setMinutes( start.getMinutes() + 30 )
         start.setHours( start.getHours() + 5);
          const end=new Date();
  end.setMinutes( end.getMinutes() + 30 )
         end.setHours( end.getHours() + 5);
       end.setSeconds(end.getSeconds() + 60);
    console.log(end);
    console.log(start);
        return db.collection(`users/${userId}/orders`).where('ordereddate', '>', start).where('ordereddate', '<', end)
                 .get()
                 .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {

                    console.log(doc.data());
 const user= doc.data()
                    const msg = {
                        to: user.email,
                        from: 'elena@sonderworks.com',
                        subject:  'Test',
                        text: ` You have a new follower!!! `,
                        html: `<strong>Hey  You have a new follower!!!</strong>`,
            
                        // custom templates
                        templateId: 'd-e1289d68c3e94863b97e9d63b1dad90c',
              
                       dynamic_template_data: {
    subject: 'Testing Templates',
    name: user.orderby,
    home: user.propertytype,
    squarefeet: user.squarefeet,
                         Address: user.address,
                         orders: user.orders,
                         ordersprice: user.ordersprice,
                         Photographyaddons: user.Photographyaddons,
                         Photographyaddonsprice: user.Photographyaddonsprice,
                         Videoaddons: user.Videoaddons,
                         VideoaddonsPrice: user.VideoaddonsPrice,
                         comments: user.comments,
                         meetingtype: user.meetingtype,
                         visitingdate: user.visitingdate,
                         orderprice: user.orderprice, 
                    
  },
                    };

                    return sgMail.send(msg)
                })
        })
                .then(() => console.log('email sent!') )
                .catch(err => console.log(err) )
                     

});








const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.sendNotification = functions.database.ref('/notifications/{user_id}/{notification_id}').onWrite((change, context) => {
    const user_id = context.params.user_id;
    const notification = context.params.notification_id;
    const message=change.after.val();
    const payload = {
      notification: {
        title: message.title,
        body: message.body,
        icon: 'https://goo.gl/dnBJ3c'
      }
    };
    console.log('We have a notification to send to : ', user_id);
    if (!change.after.exists()) { 
      console.log('A notification has been deleted from the database:', notification); 
      return null;
    }
    const deviceToken = admin.database().ref(`/Users/${user_id}/deviceToken`).once('value');
    return deviceToken.then(result => {
      const token_id = "ebx4bEaRqF8:APA91bFeAaWuJRptVuA_j8geNNdnwKRdU88m8vdU8J59xIodS_AsfHXuCZ6tFkFlZttldC3xRSlALK8-sDSaetqylylRz_X03ZsPwhH99-SpZQCQKmXaVLnAdCmUQVghGFW8PiGmLdsJ";
      return admin.messaging().sendToDevice(token_id, payload).then(response => {
        console.log('This is the notification Feature');
        return null;
      }).catch(error => {
    console.error(error);
    res.error(500);
     });
    });
  });





const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.PushAgent = functions.database.ref('/notifications/{user_id}/{notification_id}').onWrite((change, context) => {
    const user_id = context.params.user_id;
    const notification = context.params.notification_id;
    const message=change.after.val();
  const token_id= message.tokenid;
    const payload = {
      notification: {
        title: message.title,
        body: message.body,
        icon: 'https://agentsync-79f55.firebaseapp.com/assets/image/icons/SWLogo_clarge.png'
      }
    };
    console.log('We have a notification to send to : ', user_id);
    if (!change.after.exists()) { 
      console.log('A notification has been deleted from the database:', notification); 
      return null;
    }
    const deviceToken = admin.database().ref(`/Users/${user_id}/deviceToken`).once('value');
    return deviceToken.then(result => {
     
      return admin.messaging().sendToDevice(token_id, payload).then(response => {
        console.log('This is the notification Feature', token_id);
        return null;
      }).catch(error => {
    console.error(error);
    res.error(500);
     });
    });
  });






  