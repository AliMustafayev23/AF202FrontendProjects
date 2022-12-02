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
// name en uzun olan obyektin keyi
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.length > max) {
        max = arr[i].name.length;
    }
}
console.log(max);

let names;
for (let j = 0; j < arr.length; j++) {
    if (arr[j].name.length == max) {
        names = arr[j].key;
    }
}
console.log("key: " + names);