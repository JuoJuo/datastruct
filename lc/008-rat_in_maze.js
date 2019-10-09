// 这个迷宫，我们用二维数组来表示。
// 0表示可以选择的路径，1表示墙，2表示目的地
const maze = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1],
  [2, 1, 0, 0, 0, 0]
];
// tips A[x][y] => A[x * A.length + y]
/**
 *
 * @param {迷宫} maze
 * @param {位置} pos
 * @param {路径} path
 * @param {老鼠走过的路径} transverse
 */
function rat_in_maze(maze, pos = [0, 0], path = [[...pos]], transverse = []) {
  const [x, y] = pos;

  if (maze[x][y] === 2) {
    return path;
  }

  // 记录当前走过的位置
  transverse[x * maze.length + y] = '这个pos来过了';

  // 上下左右
  let choices = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];

  // 保证没有越界
  choices = choices.filter(([x, y]) => {
      // 保证没有越界
    return x >=0 && y >=0 && x < maze.length && y < maze[0].length
      // 保证不是墙 && 没有走过
    && (maze[x][y] !== 1) && !transverse[x * maze.length + y];
  })

  for (let [x, y] of choices) {
    // 每一条路径都去走，有返回值的说明是走得出去的路径
    const p = rat_in_maze(maze, [x,y], [...path, [x, y]], transverse);

    if (p) return p;
  }
}
let r = rat_in_maze(maze);

console.log(r)