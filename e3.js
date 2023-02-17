const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorsCopy = colors;
// 참조

const button = document.querySelector("button");

function changeBackground() {
  const colorsCopy = colors.slice();
  const rand1 = Math.floor(Math.random() * colorsCopy.length);
  const color1 = colorsCopy.splice(rand1, 1);
  const rand2 = Math.floor(Math.random() * colorsCopy.length);
  const color2 = colorsCopy.splice(rand2, 1);

  console.log(colorsCopy.length + " " + colors.length);
  console.log(color1[0]);
  console.log(color2[0]);

  document.body.style.background =
    "linear-gradient(to right, " + color1[0] + ", " + color2[0] + ")";
}

function changeBackground2() {
  let trueOrFalse = true;
  let rand1;
  let rand2;
  while (trueOrFalse) {
    rand1 = Math.floor(Math.random() * colors.length);
    rand2 = Math.floor(Math.random() * colors.length);
    if (rand1 != rand2) {
      trueOrFalse = false;
    }
  }
  const color1 = colors[rand1];
  const color2 = colors[rand2];
  document.body.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}

button.addEventListener("click", changeBackground);

function while연습() {
  let value1 = 0;
  let value2 = 10;
  while (value1 < value2) {
    console.log(value1);
    value1 = value1 + 1;
  }
  console.log("끝");
}

// 제공한 코드는 색상 배열과 배열에서 두 가지 색상을 무작위로 선택하여 웹 페이지의 배경으로 적용하는 두 가지 기능을 정의합니다.

// 첫 번째 기능인 changeBackground() 는 원래 배열의 복사본을 만들고 splice()를 사용하여 두 가지 색상을 무작위로 선택하여 웹 페이지에 선형 그래디언트 배경으로 적용합니다. 이 함수는 선택된 색상과 복사된 배열의 길이를 콘솔에 기록합니다.

// 두 번째 함수인 changeBackground2()는 원래 배열에서 두 개의 무작위 인덱스를 선택하고 웹 페이지에 대한 선형 그라데이션 배경으로 해당 색상. 이 함수는 while 루프를 사용하여 두 임의 인덱스가 서로 다른지 확인합니다.

// 마지막으로 코드는 다음을 사용하는 whilePractice()라는 함수를 정의합니다. while 루프는 value1의 값을 0에서 9까지 출력한 다음 "End"를 콘솔에 기록합니다.
