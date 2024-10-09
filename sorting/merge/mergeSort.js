// Function to merge two halves
function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = new Array(n1);  // Left subarray
    let R = new Array(n2);  // Right subarray

    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Recursive Merge Sort function
function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    let mid = left + Math.floor((right - left) / 2);
    mergeSort(arr, left, mid);        // Sort the left half
    mergeSort(arr, mid + 1, right);   // Sort the right half
    merge(arr, left, mid, right);     // Merge the sorted halves
}

// Function to handle user input and sort the array
function sortAndDisplay() {
    let input = document.getElementById('merge-input').value.split(',').map(Number);
    
    // Check if input is valid
    if (input.some(isNaN)) {
        document.getElementById('merge-output').innerText = 'Please enter valid numbers.';
        return;
    }

    // Capture start time for performance measurement
    let startTime = performance.now();

    // Call merge sort function
    mergeSort(input, 0, input.length - 1);

    // Capture end time for performance measurement
    let endTime = performance.now();

    // Display sorted array and time taken
    document.getElementById('merge-output').innerText = 'Sorted Array: ' + input.join(', ');
    document.getElementById('merge-time').innerText = 'Time taken: ' + (endTime - startTime).toFixed(4) + ' milliseconds';
}
