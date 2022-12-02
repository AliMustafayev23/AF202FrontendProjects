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
// t ile basliyib t ile bitenlerin sayi
count = 0;
arr.forEach((array) => {
    if (array.name[0] == "t" && array.name[array.name.length - 1] == "t") {
        count++;
    }
});
console.log(count);