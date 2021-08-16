const express = require('express');
const fs = require('fs');

const app = express();

// this line is required to parse the request body
app.use(express.json());

/* Create - POST method */
app.post('/user/add', (req, res) => {
  const existUsers = getUserData();

  const userData = req.body;

  existUsers.push(userData);

  saveUserData(existUsers);

  res.send({
    success: true,
    msg: `${userData.fullname} data added successfully`,
  });
});

/* Read - GET method */
app.get('/user/list', (req, res) => {
  console.log({ res });
  const users = getUserData();

  res.send(users);
});

/* Update - Put method */
app.put('/user/update/:username', (req, res) => {
  const username = req.params.username; // 'vadim'
  const userData = req.body; // { username: 'vadim', age: 51, ... }

  const existUsers = getUserData(); // [ { vadim }, { marina }]

  const updatedUsers = existUsers.map((user) => {
    if (username === user.username) {
      return userData;
    }

    return user;
  });

  saveUserData(updatedUsers);

  res.send({
    success: true,
    msg: `${userData.fullname} data updated successfully`,
  });
});

/* Delete - Delete method */
app.delete('/user/delete/:username', (req, res) => {
  const username = req.params.username; // 'vadik'

  const existUsers = getUserData(); // [ { vadik }, { marina }]

  const filteredUsers = existUsers.filter((user) => user.username !== username);

  saveUserData(filteredUsers);

  res.send({ success: true, msg: `${username} removed successfully` });
});
/* util functions */

//read the user data from json file
const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('users.json', stringifyData);
};

// //get the user data from json file
const getUserData = () => {
  const jsonData = fs.readFileSync('users.json');
  return JSON.parse(jsonData);
};

/* util functions ends */

//configure the server port
app.listen(3000, () => {
  console.log('Server runs on port 3000');
});