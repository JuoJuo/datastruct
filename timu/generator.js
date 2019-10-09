function request(params) {
  return (cb) => {
    setTimeout(() => {
        cb(Math.random());
    }, 1000);
  }
}


function create_runner(genFunc) {
  const it = genFunc();

  function run(data) {
    const itVal = it.next(data);
    if(!itVal.done) {
      itVal.value(run);
    }
  }
  return run;
}


create_runner(function * () {
  const a = yield request('url test');
  const b = yield request('xixi');

  console.log(a, b);
})()


function * flatten(arr) {
  for(let i=0; i<arr.length; i++){
    if (Array.isArray(arr[i])) {
      yield * flatten(arr[i])
    } else {
      yield arr[i];
    }
  }
}

console.log([...flatten([1,[2],[3,[4]]])])