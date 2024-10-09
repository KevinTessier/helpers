window.onload = initialisation;

function initialisation() {
  console.time('opérateur +');
  let str1 = '';
  for (let i = 0; i < 1000000; i++) {
    str1 = str1 + i;
  }
  console.timeEnd('opérateur +');

  console.time('concat');
  let str2 = '';
  for (let i = 0; i < 1000000; i++) {
    str2 = str2.concat(i);
  }
  console.timeEnd('concat');
}
