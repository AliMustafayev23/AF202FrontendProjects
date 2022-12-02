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
//ilk herfi t olanlari yeni arraya cixartmaq

let newArray = [];
arr.forEach((array) => {
    if (array.name[0] == "t") {
        newArray.push(array.name);
    }
});
console.log(newArray);
// t ile basliyib t ile bitenlerin sayi

count = 0;
arr.forEach((array) => {
    if (array.name[0] == "t" && array.name[array.name.length - 1] == "t") {
        count++;
    }
});
console.log("t ile basliyib t ile bitenlerin sayi:", count);

//name e ile bitenlerin nameni Super Dev beraber elemek
arr.forEach((array) => {
    if (array.name[array.name.length - 1] == "e") {
        array.name = "SuperDev";
    }
});
console.log(arr);

// name en uzun olan obyektin keyi
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.length > max) {
        max = arr[i].name.length;
    }
}
console.log("en uzun element", max);

let names;
for (let j = 0; j < arr.length; j++) {
    if (arr[j].name.length == max) {
        names = arr[j].key;
    }
}
console.log("en uzun elementin keyi: " + names);

// name uzunlugu 4 olanlari yeni arraya yigmaq
let arr4 = [];
arr.forEach((array) => {
    let a = 0;
    if (array.name.length == 4) {
        arr4.push(array.name);
    }
});
console.log(arr4);