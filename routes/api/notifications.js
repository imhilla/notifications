const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const body = {
  to: "ExponentPushToken[ly7JOnCeLIcjtYwldI1Vcd]",
  title: "Push notification from my node js server",
  body: "Your order status was succesfully cancelled",
};

router.post('/notifications', (req, res, next) => {
  fetch('https://exp.host/--/api/v2/push/send', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'host': 'exp.host',
      'accept': 'application/json',
    },
  }).then(res => res.status(200).send("Notification sent successfully"))
    .catch((err) => {
      res.status(400).send("Nofications were not sent succesfully");
      console.log(err)
    });
})

module.exports = router;

// curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/send" -d '{
//   "to": "ExponentPushToken[ly7JOnCeLIcjtYwldI1Vcd]",
//   "title":"Powwater",
//   "body": "Your order status was succesfully cancelled"
// }'
// host: exp.host
// accept: application/json
// accept-encoding: gzip, deflate
// content-type: application/json