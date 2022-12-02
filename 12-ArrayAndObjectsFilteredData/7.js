let arr = [{
        name: "test",
        key: 1,
    },
    {
        name: "task",
        key: 2,
    },
    {
        name: "tanqo",
        key: 3,
    },
    {
        name: "like",
        key: 4,
    },
    {
        name: "task",
        key: 5,
    },
    {
        name: "trust",
        key: 6,
    },
    {
        name: "test",
        key: 7,
    },
    {
        name: "last",
        key: 8,
    },
    {
        name: "tanqo",
        key: 9,
    },
    {
        name: "elephant",
        key: 10,
    },
    {
        name: "love",
        key: 11,
    },
    {
        name: "small",
        key: 12,
    },
    {
        name: "little",
        key: 13,
    },
];
// name uzunlugu 4 olanlari yeni arraya yigmaq
let arr4 = [];
arr.forEach((array) => {
    let a = 0;
    if (array.name.length == 4) {
        arr4.push(array.name);
    }
});
console.log(arr4);