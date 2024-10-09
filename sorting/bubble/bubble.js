function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    const startTime = performance.now();

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Reduce the range for optimization
    } while (swapped);

    const endTime = performance.now();
    return {
        sortedArray: arr,
        timeTaken: (endTime - startTime).toFixed(4) // Time taken in milliseconds
    };
}

function sortAndDisplay() {
    const input = document.getElementById('bubble-input').value.split(',').map(Number);
    const result = bubbleSort(input);

    document.getElementById('bubble-output').textContent = `Sorted Array: ${result.sortedArray.join(', ')}`;
    document.getElementById('bubble-time').textContent = `Time Taken: ${result.timeTaken} milliseconds`;
}
