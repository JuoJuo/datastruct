"胡".localeCompare('啊', 'zh');

// 阶乘
// 斐波那契数列
// 笛卡尔积

/* 
返回-1的往左放，返回1的往右放
*/
[3,1,4,2].sort((a, b) => {
    if (a < b) {
        return -1;
    }

    if (a>b) {
        return 1;
    }

    return 0;
})