var arr = [];
var fruits = ['banana', 'apple', 'mango'];
var label = 'Fruits';

for(var i = 0; i < fruits.length; i++) {
    var obj = {};
    obj['data'] = fruits[i];
    obj['label'] = label;
    arr.push(obj);
}

console.log(arr);