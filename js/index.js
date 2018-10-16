// 정답 인덱스를 저장하기 위한 변수 선언
let answer;
// 점수를 저장하기 위한 변수 선언
let score;
// 랜덤으로 rgb 컬러 3개를 뽑아내는 함수
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// 정답 비교해서 맞으면 새 게임 시작하는 부분은 밖으로 빼야 한다.
document.querySelectorAll(".option").forEach((optionEl, index) => {
  optionEl.addEventListener("click", e => {
    // 리스너에 대한 콜백 함수는 클로저로서 바깥 함수가 종료되어도 index를 저장해서 살려놓는 기능을 한다.
    if (index === answer) {
      alert("님 맞음");
      // 점수를 1씩 올린다.
      document.querySelector('.score').textContent++
      // 정답일 경우 새로운 게임을 시작한다.
      newStage();
    } else {
      alert("님 틀림");
    }
  });
});

// 실제 게임 한 판에 해당하는 부분
function newStage() {
  // 랜덤컬러를 3개 생성해서 배열에 저장해둔다.
  const options = [randomColor(), randomColor(), randomColor()];

  // list item nodeList를 순회하면서 각각의 node의 backgroundColor를 입혀준다.
  document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.style.backgroundColor = options[index];
  });

  // 랜덤컬러 3개중에 정답을 뽑아내기 위한 변수 대입
  answer = Math.floor(Math.random() * 3);

  // 문제를 표시하는 부분에 배열 중 정답에 해당하는 부분을 문자열로 꽂아넣는다.
  document.querySelector(".color-text").textContent = options[answer];
}

// default로 페이지를 시작하자마자 게임을 실행한다.
newStage();