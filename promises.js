// function doTask(name) {
//    console.log(`${name} has started`);
//    const duration = Math.floor(Math.random() * 5000);
//    setTimeout(() => {
//       console.log(`${name} has ended after ${duration} milliseconds`);
//    }, duration);
// }

// doTask('A');
// doTask('B');
// doTask('C');
// doTask('D');
// doTask('E');
// doTask('F');

// const p1 = new Promise((resolve, reject) => {
//    console.log('Running the async code here');
//    const duration = Math.floor(Math.random() * 5000);
//    setTimeout(() => {
//       console.log('About to resolve')
//       resolve(duration); //success!
//    }, duration);
// })

// p1.then((duration) => {
//    console.log(`The promise completed successfully in ${duration}`);
// })

// function doTask(name){
//    const p = new Promise((resolve, reject) => {
//       console.log(`${name} has started`);
//       const duration = Math.floor(Math.random() * 5000);
//       setTimeout(() => {
//          resolve(`${name} has ended after ${duration} milliseconds`);
//       }, duration)
//    });
//    return p;
// }

// doTask('A')
//   .then(result => {
//     console.log(result);
//   });

// doTask('B')
//   .then(result => {
//     console.log(result)
//     return doTask('C');
//  })
//  .then(result => {
//     console.log(result)
//     return doTask('D')
//  })
//  .then(result => {
//     console.log(result)
//  })

// // doTask('C')
// //   .then(result => {
// //     console.log(result);
// //   });

// // doTask('D')
// //   .then(result => {
// //     console.log(result);
// //   });

// doTask('E')
//   .then(result => {
//     console.log(result);
//   });

// doTask('F')
//   .then(result => {
//     console.log(result);
//   });

function doTask(name){
   const p = new Promise((resolve, reject) => {
      console.log(`${name} has started`);
      const duration = Math.floor(Math.random() * 5000);
      setTimeout(() => {
         resolve(`${name} has ended after ${duration} milliseconds`);
      }, duration)
   });
   return p;
}

Promise
.all([
   doTask('A'),
   doTask('B'),
])
 .then(results => {
    results.forEach(result => console.log(result));
    return doTask('C');
 })
 .then(result => {
    console.log(result);
    return doTask('D');
 })
 .then(result => {
    console.log(result)
 })

// doTask('E')
//   .then(result => {
//     console.log(result);
//   });

// doTask('F')
//   .then(result => {
//     console.log(result);
//   });