const str = 'a.name=ramroll&a.dress&x=1&y=&';
const str2 = 'a[name]=fox&a[company][ccc]=tentct&b=y';
const str3 = 'a&b&c';
const str4 = 'color=deep%20blue';
const str5 = 'a[0]=1&a[1]=2';


function parseQuery(str) {
  // [a.name=ramroll, a.dress, x=1, y=]
  // const arr = str.split('&');

  const res = str.split('&').reduce((obj, next) => {

    const [key, value] = next.split('=');

    if (!value) {
      return obj;
    }
    // obj[key] = value;

    // ["a", "name", ""] -> ["a", "name"]
    const r = key.split(/[\[\]]/).filter(x => x);

    deep_set(obj, r, value);

    return obj;

  }, {});

  console.log(res);
}

function deep_set(o, keyArr, value) {
  let i = 0;

  for (; i < keyArr.length - 1; i++) {
    if (o[keyArr[i]] === undefined) {
      if (keyArr[i+1].match(/^\d+$/)) {
        o[keyArr[i]] = [];
      } else {
        o[keyArr[i]] = {};
      }
    }
    o = o[keyArr[i]];
  }

  o[keyArr[i]] = decodeURIComponent(value);
}

parseQuery(str);
parseQuery(str2);
parseQuery(str3);
parseQuery(str4);
parseQuery(str5);
