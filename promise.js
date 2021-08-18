// Promise.all(requests)
//   .then((responsesArr) => {
//     const promiseArr = responsesArr.map((response) => response.json());
//     return Promise.all(promiseArr);
//   })
//   .then((resultsArr) => {
//     resultsArr.forEach((result) => {
//       console(`user!!!`, result.name);
//     });
//   })
//   .catch(() => console.log('Something went wrong...'));

const userIds = [1, 2, 3];
const requests = userIds.map((userId) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
);

async function execute() {
  try {
    const responsesArr = await Promise.all(requests);
    const userPromises = responsesArr.map((response) => response.json());
    const users = await Promise.all(userPromises);
    users.forEach((user) => {
      console.log(`user!!!`, user.name);
    });
  } catch (error) {
    console.error('Something went wrong...');
  }
}

/* 
  !!! BAD CODE!
  const ids = [1,2,3];

  async function getUser(id) {
    const response = await fetch('/user');
    const user = await response.json();
    return user.friends.map(user => user.name + user.surname);
  }

  1 - 2 - 3 - 4 

  for(let i; i < ids.length; i++) {
      await (1) 2sec
      await (2) 2sec
      await (3) 2sec
  }
  // 200 sec

*/
