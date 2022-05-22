function findMin(array) {
  let tmpMin = array[0];

  for (let i = 1; i < array.length; i++) {
    if (tmpMin > array[i]) {
      tmpMin = array[i];
    }
  }
  return tmpMin;
}

