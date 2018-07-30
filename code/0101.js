/**
 * 题目描述
 * 给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，
 * 如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，
 * 使得原字符串变成字符串“cdefab”。请写一个函数完成此功能，要求
 * 对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。
 */

/**
 * 解法1 暴力移除法 针对长度为n的字符串来说，假设需要移动m个字符
 * 到字符串的尾部，那么总共需要 m*n 次操作，时间复杂度O(m*n)，不好。
 */

/**
 * 解法2 三步反转法
 * 1，首先将原字符串分为两个部分，即X:abc，Y:def；
 * 2，将X反转，X->X^T，即得：abc->cba；将Y反转，Y->Y^T，即得：def->fed。
 * 3，反转上述步骤得到的结果字符串X^TY^T，即反转字符串cbafed的两部分（cba和fed）
 * 给予反转，cbafed得到defabc
 */

function reverseString(str, from, to) {
    while (from < to) {
        var t = str[from];
        str[from++] = str[to];
        str[to--] = t;
    }
}
/**
 * 由于js中操作字符串比较复杂 先用字符串数组代替，效果一样
 */
var a = ['A','B','C','D','E','F'];
reverseString(a, 0, 3);
console.log(a);