const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('timer is done');
  fetchData().then((txt) => {
    console.log('txt: ', txt);
    return fetchData();
  }).then((txt2) => {
    console.log(txt2)
  });
}, 2000);

console.log('hello');
console.log('hi');