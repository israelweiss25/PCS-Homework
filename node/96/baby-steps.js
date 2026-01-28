let num = 0;
for (let i = 2; i < process.argv.length; i++){
    // console.log(+process.argv[i-1] + +process.argv[i]);
    num += +process.argv[i];
}
console.log(num);
