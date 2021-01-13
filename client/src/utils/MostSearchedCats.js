export const mostSearchedBreeds = (arr) => {
  let counts = arr.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  let mostFrequent = Object.keys(counts).filter((k) => counts[k] === maxCount);
  return mostFrequent;
};

// save array to localstorage
// const catBreed = e.target.textContent;

// let catBreedArr;

// if (localStorage.getItem('catBreedArr') === null) {
//   catBreedArr = [];
// } else {
//   catBreedArr = JSON.parse(localStorage.getItem('catBreedArr'));
// }
// catBreedArr.push(catBreed);
// localStorage.setItem('catBreedArr', JSON.stringify(catBreedArr));

// let counts = JSON.parse(localStorage.getItem('catBreedArr')).reduce((a, c) => {
//   a[c] = (a[c] || 0) + 1;
//   return a;
// }, {});
// let maxCount = Math.max(...Object.values(counts));
// let mostFrequent = Object.keys(counts).filter((k) => counts[k] === maxCount);

// export default mostFrequent;
