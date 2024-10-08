// script.js

function displaySortingInfo(algorithm) {
    const description = document.getElementById('sorting-description');
    
    if (algorithm === 'bubble') {
        description.textContent = `
            Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements,
            and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
            Time Complexity: O(n^2). Best suited for small datasets.
        `;
    } else if (algorithm === 'insertion') {
        description.textContent = `
            Insertion Sort builds the sorted array one element at a time by comparing each new element with those already sorted
            and inserting it into its correct position. Time Complexity: O(n^2). Effective for nearly sorted data.
        `;
    } else if (algorithm === 'merge') {
        description.textContent = `
            Merge Sort is an efficient, stable, and comparison-based sorting algorithm that divides the array into two halves,
            recursively sorts them, and then merges the sorted halves. Time Complexity: O(n log n). Ideal for large datasets.
        `;
    }
}
