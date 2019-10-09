
function clone (obj) {
  if (obj === null || typeof obj !== 'object') return obj;


  // 这一句，处理了数组，对象包括（Date，Regex）
  const cp = new obj.constructor();

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cp[key] = clone(obj[key]);
    }
  }

  return cp;
}


const obj = {
  f: function() {},
  a:1,
  b: [1,2,3,4],
  data: {
    arr: ['fdsf', {name: 'lrj'}],
    reg: new RegExp('A-Z'),
    d: new Date(),
  }
};


console.log(clone(obj))
