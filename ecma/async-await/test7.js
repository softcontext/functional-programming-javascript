/*
왜 async/await가 더 나은가?
1. Concise and clean
2. Error handling
3. Conditionals
 */

function getJSON() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        needsAnotherRequest: true,
        value: 100
      });
    }, 500);
  });
}

function makeAnotherRequest(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.value = data.value + 200;
      resolve(data);
    }, 500);
  });
}

// const makeRequest = () => {
//   return getJSON().then(data => {
//     if (data.needsAnotherRequest) {
//       return makeAnotherRequest(data).then(moreData => {
//         console.log(moreData, '를 받음');
//         return moreData;
//       });
//     } else {
//       console.log(data, '를 받음');
//       return data;
//     }
//   });
// };

const makeRequest = async () => {
  const data = await getJSON();
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData, '를 받음');
    return moreData;
  } else {
    console.log(data, '를 받음');
    return data;
  }
};

makeRequest();
