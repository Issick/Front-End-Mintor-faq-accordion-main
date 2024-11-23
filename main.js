// let plusOne = document.querySelector(`.box`);

let answers = document.querySelectorAll(`.answer`);

let expandOne = false;
let expandTow = false;
let expandThree = false;
let expandFour = false;

let expandAnswer = document.querySelectorAll(`.question img`);

function makeAnswerExpand(boxElement, answerIndex, answerVar) {
  if (answerVar) {
    boxElement.src = "./assets/images/icon-plus.svg";
    answers[answerIndex].style.display = "none";
    answerVar = false;
    return answerVar;
  } else {
    boxElement.src = "./assets/images/icon-minus.svg";
    answers[answerIndex].style.display = "block";
    answerVar = true;
    return answerVar;
  }
}

expandAnswer[0].parentElement.onclick = () => {
  expandOne = makeAnswerExpand(expandAnswer[0], 0, expandOne);
};

expandAnswer[1].parentElement.onclick = () => {
  expandTow = makeAnswerExpand(expandAnswer[1], 1, expandTow);
};

expandAnswer[2].parentElement.onclick = () => {
  expandThree = makeAnswerExpand(expandAnswer[2], 2, expandThree);
};

expandAnswer[3].parentElement.onclick = () => {
  expandFour = makeAnswerExpand(expandAnswer[3], 3, expandFour);
};
