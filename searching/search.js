// script.js
function performSearch() {
    const searchType = document.getElementById('search-type').value;
    const inputData = document.getElementById('input-data').value.split(',').map(Number);
    const target = parseInt(document.getElementById('target').value);
    let result;

    if (searchType === 'linear') {
        result = linearSearch(inputData, target);
    } else if (searchType === 'binary') {
        inputData.sort((a, b) => a - b); // Binary search requires sorted data
        result = binarySearch(inputData, 0, inputData.length - 1, target);
    }

    document.getElementById('result').textContent = result !== -1
        ? `Element found at index ${result}. Time Complexity: ${searchType === 'linear' ? 'O(n)' : 'O(log n)'}`
        : 'Element not found';
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, left, right, target) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
