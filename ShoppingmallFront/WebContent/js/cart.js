document.addEventListener("wheel",handleModalZoom);
const productImage = document.querySelector('.cartprd');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

productImage.addEventListener('click', function() {
  modal.style.display = 'block';
  modalContent.src = this.src;
});
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
//모달 초기 설정
var currentScale = 1; // 현재 비율
var zoomAmount = 0.1; // 확대 축소 비율
var isDragging = false;
var startX = 0;
var startY = 0;
var translateX = 0;
var translateY = 0;

//모달 줌 이벤트
function handleModalZoom(event) {
var modalContent = document.querySelector('.modal-content');
var deltaY = event.deltaY;
// 스크롤 방향에 따라 확대 또는 축소 비율 계산
var zoomFactor = 1 + (deltaY > 0 ? -zoomAmount : zoomAmount);
// 현재 비율에 새로운 확대 비율 누적
currentScale *= zoomFactor;
// 최소 최대 확대 비율 제한
var minScale = 0.5;
var maxScale = 3;
currentScale = Math.max(minScale, Math.min(currentScale, maxScale));
// 모달 크기 조정
modalContent.style.transform = `scale(${currentScale})`;
event.preventDefault();
//모달 확대 시 시점 이동 이벤트
modalContent.addEventListener('mousedown', function(event) {
    if (event.button === 2) { // 마우스 우클릭
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        translateX = 0;
        translateY = 0;
    }
});
modalContent.addEventListener('mousemove', function(event) {
    if (isDragging) {
    var deltaX = event.clientX - startX;
    var deltaY = event.clientY - startY;
    translateX += deltaX;
    translateY += deltaY;
    modalContent.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    startX = event.clientX;
    startY = event.clientY;
    }
});
modalContent.addEventListener('mouseup', function(event) {
    if (event.button === 2 && isDragging) { // 마우스 우클릭 해제
        isDragging = false;
    }
});
modalContent.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // 우클릭 메뉴 차단
    });
}
