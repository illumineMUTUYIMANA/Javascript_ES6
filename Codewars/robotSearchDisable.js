
function searchDisable(log) {
  if (typeof log === 'string') {
    log = log.trim().split(/\s+/); 
  }

  let frequencies = {};
  for (let item of log) {
    frequencies[item] = (frequencies[item] || 0) + 1;
  }

  let totalMatchingCount = 0;

  for (let item in frequencies) {
    let count = frequencies[item];

    if (count <= 3) continue;

    if (item.length !== 4) continue;

    let thirdDigit = item[2]; 
    if (thirdDigit !== '2' && thirdDigit !== '3') continue;

    let num = Number(item);
    if (isNaN(num) || num < 2) continue;
    
    let isPrime = true;
    let sqrnum = Math.sqrt(num);
    for (let i = 2; i <= sqrnum; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (!isPrime) continue;

    totalMatchingCount += count;
  }

  if (totalMatchingCount > 50) {
    return "match disable bot";
  }

  return "no match continue";
}

console.log(searchDisable('8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923'))// match disable bot


