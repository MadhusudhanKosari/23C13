function insertionSort(arr) {
    let n = arr.length;
    const startTime = performance.now();
    
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements greater than key to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    const endTime = performance.now();
    return {
        sortedArray: arr,
        timeTaken: (endTime - startTime).toFixed(4) // Time taken in milliseconds
    };
}

function sortAndDisplay() {
    const input = document.getElementById('insertion-input').value.split(',').map(Number);
    const result = insertionSort(input);

    document.getElementById('insertion-output').textContent = `Sorted Array: ${result.sortedArray.join(', ')}`;
    document.getElementById('insertion-time').textContent = `Time Taken: ${result.timeTaken} milliseconds`;
}
