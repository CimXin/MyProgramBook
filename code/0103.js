/**
 * 题目描述
 * 输入一个数组和一个数字，在数组中查找两个数，使得它们的和正好是输入的那个数字。
 * 要求时间复杂度是O(N)。如果有多对数字的和等于输入的数字，输出任意一对即可。
 * 例如输入数组1、2、4、7、11、15和数字15。由于4+11=15，因此输出4和11。
 */

/**
 * 最优解 解法三 两头夹逼法或称两个指针两端扫描法
 * 如果原数组是无序的，则需要先排序，然后两个指针i,j从两头开始扫描，
 * 如果某一刻a[i]+a[j] > sum，则要想办法让sum的值减小，所以此刻i不动，j--；
 * 如果某一刻a[i]+a[j] < sum，则要想办法让sum的值增大，所以此刻i++，j不动。
 * 所以，数组无序的时候，时间复杂度最终为O(N log N + N)=O(N log N)。
 */
function twoNum(arr, sum) {
    var length = arr.length;
    var begin = 0;
    var end = length - 1;

    while (begin < end) {
        var currSum = arr[begin] + arr[end];
        if (currSum == sum) {
            console.log('ok-');
            console.log('%d - %d', arr[begin], arr[end]);
            break;
        } else {
            if (currSum < sum) {
                begin++;
            } else {
                end--;
            }
        }
    }
}

twoNum([1, 3, 5, 8, 10], 8);

/**
 * 延伸 有两数之和 三数之和 以及n数之和
 * eg 三数之和
 */

function threeNum(arr, sum) {
    //先排序
    var length = arr.length;
    for (var i = 0; i < length; ++i) {
        var begin = i + 1;
        var end = length - 1;

        while (begin < end) {
            var currSum = arr[i] + arr[begin] + arr[end];
            if (currSum == sum) {
                console.log('%d-%d-%d', arr[i], arr[begin], arr[end]);
                break;
            } else {
                if (currSum < sum) {
                    begin++;
                } else {
                    end--;
                }
            }
        }
    }
}
threeNum([1, 2, 3, 4, 7, 10], 20);

/**
 * 四数之和 
 * 和前俩题思路一样，只不过排序后要固定前俩个数字，俩头扫。需要俩重循环。
 */

function fourNum(arr, sum) {
    var length = arr.length;

    for (var i = 0; i < length - 3; ++i) {
        for (var j = i + 1; j < length - 2; ++j) {
            var begin = j + 1;
            var end = length - 1;

            while (begin < end) {
                var currSum = arr[i] + arr[j] + arr[begin] + arr[end];
                if (currSum == sum) {
                    console.log('four-- %d-%d-%d-%d', arr[i], arr[j], arr[begin], arr[end]);
                    break;
                } else {
                    if (currSum < sum) {
                        begin++;
                    } else {
                        end--;
                    }
                }
            }
        }
    }
}
fourNum([1, 2, 3, 4, 5, 6, 7, 8, 10, 11], 30)