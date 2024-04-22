export default function createIteratorObject(report) {
  const myArray = [];
  for (const item of Object.values(report.allEmployees)) {
    myArray.push(...item);
  }

  return myArray;
}
