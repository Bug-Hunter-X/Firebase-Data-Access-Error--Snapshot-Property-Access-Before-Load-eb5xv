# Firebase Data Access Error: Snapshot Property Access Before Load

This repository demonstrates a common error in Firebase applications where you attempt to access properties of a document snapshot before the data has fully loaded.  Improper handling of asynchronous operations can lead to unexpected errors and crashes.

The `bug.js` file shows the erroneous code, while `bugSolution.js` presents a corrected version using `async/await` to handle promises appropriately.

## How to reproduce:

1.  Clone this repository.
2.  Install Firebase using `npm install firebase`.
3.  Configure your Firebase project.
4.  Run `bug.js` to see the error.
5.  Run `bugSolution.js` to see the correct implementation.