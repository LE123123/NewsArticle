const Func = () => {
  const returnPromise = new Promise((resolve, reject) => {
    console.log('doing');
    setTimeout(() => {
      console.log('doing 2');
      resolve('Hello');
    }, 3000);
  });
  return returnPromise;
};

Func().then((value) => console.log(value));
console.log('done');
