const noContext = document.getElementById("noContextMenu");

// noContext.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

// noContext.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

function preventDefault(e) {
  e.preventDefault();
}
// preventDefault:콜백함수라고부름 call back
noContext.addEventListener("contextmenu", preventDefault);

// // 브라우저가부른다
// preventDefault(e);
// // 전역
