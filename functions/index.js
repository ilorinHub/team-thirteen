const path = require('path');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const next = require('next');

admin.initializeApp();

const db = admin.firestore();

exports.sendInviteMail = functions.firestore
  .document('invitee_emails/{docId}')
  .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const email = newValue.email;
    const teamId = newValue.teamId;
    const workspaceId = newValue.workspaceId;
    const teamName = newValue.teamName;
    const workspaceName = newValue.workspaceName;
    const invitedBy = newValue.invitedBy;
    const teamType = newValue.teamType;

    // send email
    const mailRef = db.collection('mail').doc();
    mailRef.set({
      to: email,
      message: {
        subject: `Invite to Join ${teamName} on ${workspaceName}`,
        html: `
        Hey there! 👋
        <br />
        <br />
       You have just being invited to collaborate as a team member of ${teamName} on ${workspaceName}'s workspace by ${invitedBy}.
       <br />
       <br />
       Click the button below to join the team.
        <br />
        <br />
       <a href="https://byte-me-ng.firebaseapp.com/invite?workspace=${workspaceId}&team=${teamId}&teamType=${encodeURIComponent(
          teamType
        )}">Join ${teamName}</a>
       <br />
       <br />
       If you have any questions, please contact us at
       <a href="mailto:haywhyze@gmail.com">help@byte-me-ng.firebaseapp.com</a>
       <br />
       <br />
       Thanks,
       <br />
       <br />

       The ByteMe Team
     `, // html body
      },
    });

    // perform desired operations ...
  });

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  console.log(`File: ${req.originalUrl}`); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});
