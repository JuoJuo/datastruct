const R = require('ramda');

const average = R.converge(R.divide, [R.sum, R.length])
average([1, 2, 3, 4, 5, 6, 7]) //=> 4

const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
strangeConcat("Yodel") //=> "YODELyodel"




R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]




R.innerJoin(
  (record, id) => record.id === id,

  [{id: 824, name: 'Richie Furay'},
    {id: 956, name: 'Dewey Martin'},
    {id: 313, name: 'Bruce Palmer'},
    {id: 456, name: 'Stephen Stills'},
    {id: 177, name: 'Neil Young'}],
    
  [177, 456, 999]
);
//=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]


// 插入分隔符
R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']



const byGrade = R.groupBy(function(student) {
  const score = student.score;
  return score < 65 ? 'F' :
         score < 70 ? 'D' :
         score < 80 ? 'C' :
         score < 90 ? 'B' : 'A';
});
const students = [
  {name: 'Abby', score: 84},
  {name: 'Eddy', score: 58},
  {name: 'Jack', score: 69}
];

byGrade(students);
// {
//   'A': [{name: 'Dianne', score: 99}],
//   'B': [{name: 'Abby', score: 84}]
//   'F': [{name: 'Eddy', score: 58}]
// }



// R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
//=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]

const res = R.groupWith((a, b) => {
  console.log(a, b);
  return a + 1 === b
}, [0, 1, 1, 2, 3, 5, 8, 13, 21])
console.log(res);
//=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]

// R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
//=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

// R.groupWith(R.eqBy(isVowel), 'aestiou')
//=> ['ae', 'st', 'iou']