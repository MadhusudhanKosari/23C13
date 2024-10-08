// script.js

function performSorting() {
    const inputData = document.getElementById('input-data').value.split(',').map(Number);
    const resultBox = document.getElementById('result');

    // Bubble Sort
    const bubbleSorted = bubbleSort([...inputData]);
    resultBox.innerHTML = `
        <strong>Sorted Array (Bubble Sort):</strong> ${bubbleSorted.join(', ')}<br>
        <strong>Time Complexity:</strong> O(n^2)<br>
        <strong>Space Complexity:</strong> O(1)
    `;
}

// Bubble Sort Implementation
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
