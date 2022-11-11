// Import packages
const express = require('express')
const schedule = require('node-schedule');

// App
const app  = express()
const PORT = 3356

app.use(express.json())


app.post('/api/send/users', async function(req, res) {
    const users = req.body;

    if (Array.isArray(users)) {
      await users.forEach(async(user_data) => { // send multiple jobs
        schedule.scheduleJob(user_data.date, async() => {
          const sgMail = require('@sendgrid/mail')
          sgMail.setApiKey(process.env.SENDGRID_API_KEY)
          const msg = {
              template_id: 'd-2a239b889605432e810f1ad55467f1ef',
              to: user_data["email"], // Change to your recipient
              from: 'ParkminderSF@gmail.com', // Change to your verified sender
              subject: 'Sending with SendGrid is Fun!!!',
              text: 'and easy to do anywhere, even with Node.js',
              html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          }
          try { 
              await sgMail.send(msg)
              console.log(`An email was sent to ${user_data["name"]}`)
          } catch(e) {
            console.log(e)
          }
        })
      })
      res.end('Notifications scheduled.');
  } else {
    res.status(400).end('Must be a JSON array of users.');
  }
});

app.listen(PORT, () => {
  console.log("Email server listening on port " + PORT)
});