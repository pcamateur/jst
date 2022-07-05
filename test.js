let arr = [];

for (let i = 1; i < 5; i++) {

    arr.push(i);

}

let rn = Math.floor(Math.random() * 10);

arr.push(rn);

let cn = 1;

for (let x = 1; x < arr.length; x++) {

    for (let y = x + 1; y < arr.length; y++) {

        if (arr[x] == arr[y]) {

            cn = 10;

            break;

        }
    }
}

if (cn == 1) {

    console.log('False');

} else if (cn == 10){

    console.log('Ture');

}

console.log(arr);



