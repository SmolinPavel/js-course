/*
Option 1 - Callbacks

method('param', (err, data) => {
    if (err) {
        console.error('Error', err);
        return;
    }

    method2(data, (err, data2) => {
        if (err) {
          console.error('Error', err);
          return;
        }

        method3(data2, (err, data3) => {
            if (err) {
              console.error('Error', err);
              return;
            }

        })
    })

});

*/

/*
Option 2 - Promises

method('param')
  .then(data => method2(data))
  .then(data2 => method3(data2))
  .catch(err => console.error('Error', err))

*/

/* 
Option 3 - Generators

function* genCreator(){   
  console.log("First");
  yield 1;
  console.log("second");
  yield 2;
  console.log("third");
} 

let generator=genCreator();
generator.next();
generator.next();

*/

/*
Option 4 - Async/await

async function exec() {
  try {
    const data = await method('param');
    const data2 = await method2(data);
    const data3 = await method3(data2);
  } catch(error) {
    console.error('Error', error);
  } finally {
    console.log('Program has finished')
  }
}

*/

const btn = document.getElementById('posts-btn');

async function handleClick() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(
      'Async Posts from the server',
      posts.map((post) => post.id),
    );
  } catch (error) {
    console.error(error);
  }
  // .then((response) => response.json())
  // .then((posts) => {
  //   console.log('Posts from the server', posts);
  // })
  // .catch(console.error);
}

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

btn.addEventListener('click', execute);
