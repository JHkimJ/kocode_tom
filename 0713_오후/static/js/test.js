
// var redCup=10;
// var blueCup=20;
// var whiteCup=0;

// document.write("변경전 빨간컵: " +redCup+"파란컵:"+blueCup+"<br>");

// whiteCup = redCup;
// redCup = blueCup;
// blueCup = whiteCup;

// document.write("변경후 빨간컵: " +redCup+"파란컵:"+blueCup);
// 화면에 출력 되는 내용은 
// 변경전 빨간컵 : 10 파란컵 : 20
// 변경후 빨간컵 : 20 파란컵 : 10

// redCup=20 형식 금지

// var jin = 0;
// var red = 1;
// var blue = 2;
// var yellow = 3;
// var green = 4;

// jin = red;
// document.write("변경전 : " + jin +"<br>");

// jin = green;
// document.write("청바지의 색은 " + jin + " 입니다.");

// 변수에 다른 데이터를 저장하면 이전데이터위에 덮어쓰기 한다.
// 스크립트에서 변수는 숫자를 가질수도 문자를 가질수도 있다.
// 숫자를 저장했다고 문자를 저장 못하는건 아니다.
// 제어문 - 조건문, 반복문 
// 조건문 - if문, switch문
// 반복문 - for,while, do-while
////////////////////////////////////////////////////////////
// if 문  - 조건식이 참이냐 거짓이냐에 따라서 코드가 실행된다.(분기점이 생김)
// 조건식 - 결과가 참과 거짓이 나오는 식. 
//          비교 - > , < , >= , <= , == , !=
// 140 <= 키 , 4 <= 수업시간, 심부름 == 심부름결과(고추장)
// 내위치 == 주문위치.
// var tall = 150;
// if(tall >= 140){
//     document.write("바이킹 탑승");  
// }else{
//     document.write("탑승 불가");
// }
//점수가 60점이상 이라면 합격, 60점 미만 이라면 불합격
// var score=60;
// if(score >= 60){
//     document.write("합격");
// }else{
//     document.write("불합격");
// }

// document.write("<br><br>");
// 국도 8-10길은 규정속도가 시속 70km 이다.
// 과속인지 아닌지 자동차의 속도를 입력받아서 출력하시오
// var vel = Number(prompt("현재 시속을 입력하세요."));
// if(vel > 70 ){
//     document.write("현재시속 " + vel +"km/h 과속 입니다.");
// }else{
//     document.write("현재시속 " + vel +"km/h 입니다.");
// }
// /// if (조건), else if (조건) ,조건을 넣으려면 if()|else if() 안에 넣어야한다. >>> else() 불가능
// var score = Number(prompt("점수를 입력하세요"));

// if( score >= 90 ){
//     document.write(score+"점 입니다. 학점 A"); 
// }else if( score >= 80 ){
//     document.write(score+"점 입니다. 학점 B"); 
// }else if( score >= 70 ){
//     document.write(score+"점 입니다. 학점 C");
// }else{
//     document.write(score+"점 입니다. F");
// }

// 음식을 배달 주문을 하였다.
// 음식점의 위치는 중구 대흥동이다.
// 같은 구에서 주문하면 배달료 0원, 서구에서 주문하면 배달료 1000원
// 동구에서 주문하면 배달료 2000원 이라면
// 현재 나의 위치는 어디인지 입력하여 배달료 얼마인가 출력하시오.

// var locate = prompt("거주지 입력하세요");
// var tip = 0;// 배달료
// if(locate == "서구"){
//     tip=1000;
// }else if(locate == "동구"){
//     tip=2000;
// }
//     document.write(locate + "에서 배달료는 : " + tip + "원 입니다.<br>");

// if(locate =="중구"){
//     document.write(locate + "같은동네는 무료 입니다.");
// }else if(locate == "서구"){
//     document.write(locate + "의 배달료 는 1000원 입니다.");
// }else if(locate == "동구"){
//     document.write(locate + "의 배달료 는 2000원 입니다.");
// }
//66-23+1
// 수의 범위 지정 곱셈 값 : (최대수 - 최소수 + 1) 20-7+1 덧셈 값 : 최소 수
// var num = Math.floor(Math.random()*44) + 23 ;

// document.write( num );

// 동전 맞추기, 1- 앞면, 2- 뒷면
// Math.floor 는 정수를 부르는 속성 함수
// var coin = Math.floor(Math.random() * 2 ) + 1;

// var user = (prompt("1.앞면 2.뒷면"));
// if( isNaN(user) ){        // isNaN 함수는 숫자로 변환이 가능한경우 거짓,
//                             // 숫자로 변환이 불가능한 경우 참 이다.
//     alert(" 숫자만 입력하세요 ");
//     user = prompt("1.앞면 2.뒷면");
// }
// user = Number(user);//문자열을 숫자로 변환
// if(coin == user){
//     document.write((user == 1 ? '앞면' : '뒷면') + "정답 입니다.<br>");
// }else{
//     document.write(" 틀렸습니다. 다시?");
// }

// var coin = Math.floor(Math.random() * 2 ) + 1; 임의의 수 1~2 를 생성
// var user = (prompt("1.앞면 2.뒷면")); 입력창에 1 or 2 를 user 에 받음
// if(coin == user) prompt 에 입력한 값과 coin에 받음 임의의 수가 일치하면 앞몇 or 뒷면 정답 입니다. 출력
// 일치 하지 않으면 틀렸습니다. 다시? 출력

// 주사위 게임
// 주사위 숫자를 맞추시오.
// 내가 입력한 숫자가 주사위의 숫자가 같아면 정답, 같지 않다면 손목 이라고 출력

// var dice = Math.floor(Math.random()*6)+1;

// // var user = (prompt("몇이 나올까요?"));
// var user = inputNum("1~6중 하나만 골라봐");
// user = Number(user);

// if(isNaN(user)) {
//     alert("숫자를 입력하세요");
//     user = prompt("예상 숫자를 입력!");
// }
// if(dice == user){
//     document.write("주사위의 값 :" +dice+" 정답!");
// }else{
//     document.write("틀렸습니다! 다시 맞춰보세요!");
// }

// function inputNum(str){
//     var a = prompt(str);
//     while( isNaN(a)){
//         alert("숫자만 입력 가능합니다.");
//         a = prompt(str);
//     }
//     a = Number(a);
//     return a;
// }

 /*
 0713 과제 
    주차장 요금 계산 
    주차장 기본요금 1000원 ( 30분 )
    10분 초과시 100원 추가
    
    2시간 이상 주차시 기본요금이 1500원으로 변경.
    4시간 이상 주차시 기본요금이 2500원.
    8시간 이상 주차시 무조건 5000원.

    -주차한 시간이 총 몇분인가 입력하여 요금을 출력하기-
    표시단위 480분
*/