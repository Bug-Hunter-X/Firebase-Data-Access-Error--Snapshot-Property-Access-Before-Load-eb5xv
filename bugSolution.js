The solution involves using `async/await` to ensure the snapshot data is loaded before accessing its properties. This prevents the error caused by accessing the data before it's available. Here's an example of how to rewrite the code to avoid this issue:

```javascript
async function getData() {
  try {
    const docRef = doc(db, "yourCollection", "yourDocId");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      // Access properties safely here
      const name = docSnap.data().name;
      const age = docSnap.data().age;
      console.log(name, age);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}

getData();
```
By awaiting the `getDoc` promise, we guarantee that the data is loaded before proceeding.  Error handling is also implemented using a `try...catch` block.