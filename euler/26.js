// Reciprocal cycles

  let max=0;
  let max2=0
  for (i=7;i<10;i++){
    let counter=0;
    // if i > 10 value = 10
    let value = 10%i;
    // max length repeating series can be
    let z= 20;
    while (value != 1 && z>0){
      value = value *10;
      value = value % i;
      console.log(counter, value)
      counter++;
      z--;
    }
    if (counter>max && z>1){
      max=counter;
      max2=i;
    }
  }

console.log(max, max2)