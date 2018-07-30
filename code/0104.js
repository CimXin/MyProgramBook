/**
 * 背包问题 
 * 问题描述:
 * 输入两个整数n和sum，要求从数列1,2,3,...,n中随意取出几个数，使得它们的和等于sum，请将其中所有可能的组合列出来。
 * 
 * 
 * 1,如果取第n个数，那么问题就转化为“取前n-1个数使得它们的和为sum-n”，对应的代码语句就是sumOfkNumber(sum - n, n - 1)；
 * 2,如果不取第n个数，那么问题就转化为“取前n-1个数使得他们的和为sum”，对应的代码语句为sumOfkNumber(sum, n - 1)。
 */

var list = [];

function sumOfKNumber(sum, n) {
    if (sum <= 0 || n <= 0) {
        return;
    }

    // if (n * (n + 1) / 2 < sum) { //剩余所有数之和小于sum，结束查找 
    //     return;
    // }
    if (sum == n) {
        console.log('ok - ', list);
    }
    list.unshift(n);
    sumOfKNumber(sum - n, n - 1);
    list.shift(n);
    sumOfKNumber(sum, n - 1);
}

sumOfKNumber(5,5);