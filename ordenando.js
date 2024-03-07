const swap = (arr, position1, position2) => {
  [arr[position1], arr[position2]] = [arr[position2], arr[position1]]
}

const shuffle = (arr, numOfSwaps) => {
  for (let i = 0; i < numOfSwaps; i++) {
      const randomPosition1 = Math.floor(Math.random() * arr.length);
      const randomPosition2 = Math.floor(Math.random() * arr.length);
      swap(arr, randomPosition1, randomPosition2);
  }
  return arr;
};

const bubble_sort = (arr) => {
  for(let i = 0; i < arr.length - 1; i++) {
    for (let x = 0; x < (arr.length - i - 1); x++) {
      if (arr[x] > arr[x+1]) {
        swap(arr, x, x+1)
      }
    }
  }
  return arr;
}

const selection_sort = (arr) => {
  const n = arr.length;
  for(let i = 0; i <n -1; i++) {
    let minIndex = i;
    for (let x = i+1; x < n; x++) {
      if (arr[x] < arr[minIndex]) {
        minIndex = x;
      }
    }
    swap(arr, i, minIndex);
  }
}

const quick_sort = (arr, low, high) => {
  if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quick_sort(arr, low, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, high);
  }
};

const particionamento = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
          i++;
          swap(arr, i, j);
      }
  }
  swap(arr, i + 1, high);
  return i + 1;
};
