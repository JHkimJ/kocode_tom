/*
    주차장 요금 계산 
    주차장 기본요금 1000원 ( 30분 )
    10분 초과시 100원 추가
    
    2시간 이상 주차시 기본요금이 1500원으로 변경.
    4시간 이상 주차시 기본요금이 2500원.
    8시간 이상 주차시 무조건 5000원.
    -주차한 시간이 총 몇분인가 입력하여 요금을 출력하기-
    표시단위 480분
*/
// var pTime = prompt("주차시간 분(단위) 입력");
// var fee = 0;

// if (pTime <= 30) {
//   fee = 1000;
// } else if (pTime <= 120) {
//   fee = 1000 + Math.floor((pTime - 30) / 10) * 100;
// } else if (pTime <= 240) {
//   fee = 1500 + Math.floor((pTime - 120) / 10) * 100;
// } else if (pTime <= 480) {
//   fee = 2500 + Math.floor((pTime - 240) / 10) * 100;
// } else {
//   fee = 5000;
// }
//Math.ceil 을 쓰면 자리올림을 하게 돼서 121~130분까지 요금은 1600원이 되는 반면
//Math.floor 를 쓰면 자릿수를 올리지않고 바닥에 두게된다 즉 121~129분까지의 시간은 무시되어서 1500원이 출력
// document.write("주차 시간"+pTime+"분 "+"주차 요금: " + fee + "원");

var time = Number(prompt(" 주차 시간 "));
var cost = 1000;
 
if(time >= 480){
  cost = 5000;
  time = 0;
}else if( time >= 240){
  cost = 2500;
  time = time - 240;
}else if( time >= 120){
  cost = 1500;
  time = time - 120;
}else{
  time = time < 40 ? 0 : time - 30;
}

var price = cost + (parseInt( time / 10 ) * 100) ;

document.write("주차 요금 :" +price+"원");