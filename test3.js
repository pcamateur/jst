console.log('script start');

async function async1() {
      await async2();
      console.log('async1 done');
}

async function async2() {
      return new Promise((resolve, reject) => {
            console.log('async2 done');
            resolve('ok')
      })
}

async1()

new Promise(resolve => {
      console.log('Promise');
      resolve();
}).then(function() {
      console.log('Promise1 done');
}).then(function() {
      console.log('Promise2 done');
})

console.log('script end');