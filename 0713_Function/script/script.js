//함수 function
// 레시피
// 공장
// 마법
// 수학
//함수 선언
// function hello( 매개변수,parameter,인수){
// 
// }
// function hello(name, lang){
//     if(lang == "ko"){
//     alert(name+"님 안녕하세요.");
//     }else if(lang == "ge"){
//     alert(name+" Guten tag");
//     }else if(lang == "ch"){
//     alert(name+" Ni hao");
//     }else{
//     }
// }
// scope of variable 변수의 범위
// var cel = "유재석";
// function bbb(){
//     var cel = "한지호";
//     alert(cel);
// }
// function ccc(){
//     alert(cel);
// }
// bbb(); ccc();
// hello("홍길동", "ch");
// var cel = "유재석"; Global 전역변수
// function aaa(){
//     var cel = "한지호";
//     alert("가장 유명한 사람: "+cel);
// }            Local 지역변수
//aaa(); local 변수
// alert(cel);
// var name = prompt("이름을 입력하세요.");
// alert(name+"님 안녕하세요");
// var a = prompt("첫번째 수");
// var b = prompt("두번째 수");
// alert(a+b);
// var adult = confirm("만 18세 이상입니까?");
// if(adult){
//     alert("어서오세요.");
// }else{
//     alert("애들은 가라.");
// }

// var del = confirm("정말로 데이터를 삭제 하시겠습니까?");
// if(del){
//     alert("데이터가 삭제 되었습니다.");
// }

// return 이란 무엇인가?
// function plus(a,b){
//     var result = a+b;
//     return result; //원청자 쪽으로 값을 반환
// }
// 밑엔 5 값이 내려감
// console.log(plus(3,5));

//익명함수를 알아보자.
// document.getElementById("aaa"),onclick = function(){
//     alert("누르지마");
// }
//문서에서 id가 aaa인걸 누르면 function안 액션을 취하겠다.
// function sing(){
//     alert("ㅃㅃ 빨간맛 궁금해 허니~");
// }
// document.getElementById("aaa").onclick = sing;
// document.getElementById("aaa").onclick = function(){
//     sing();
// }
//괄호가 없으면 바로 실행 , 괄호가 있으면 과정이 필요
//마우스 이벤트 오브젝트설명
//client X,Y 는 화면에 바로 보이는 좌표
//page X,Y 는 전체 페이지 사이즈에 대한 좌표
//screen X,Y 모니터 전체화면 기준

// document.onmousemove = function(event){
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log( x + "," + y);
// }
// a++ 후위 연산자 ++a 전위 연산자
// 변수 s = 0 
// 문서에서 id가 aaa 인 버튼을 클릭했을때 액션을 취함
    // s를 1증가 시키자
    // 문서에서 아이디가 score인 녀석의 안쪽에 s를 넣자.
// var s = 1;
// document.getElementById("aaa").onclick = function(){
//     s = s * 2 ;
//     // s++; s = s + 10; , s += 10; , 10씩 증가
//     document.getElementById("score").innerHTML = s;
// }
//innerHTML html 안에 id 가 score인 태그에 s 값을 넣어라

// alert(1>3 && 6>9);
//조건       A      B   결과
// &&      true   ture  true
// &&      true   false false
// &&      false  true  false
// &&      false  false false
// 조건      A       B       결과
// ||       true    true    true
// ||       true    false   true
// ||       false   false   true
// ||       false   false   true

// var age = 15;
// var height = 132;
// var ticket = true;
// if((age>=15 || height>=150) && ticket){
//     alert("입장 가능");
// }else{
//     alert("입장 불가능");
// }

// var deposit = 100000;
// var monthly = 700;
// var distance = 15;
// var top = true;
// var direction = "south";
// if(deposit <= 100000 && monthly <= 500 && distance <= 15 && top && direction){
//     alert("입주");
// }else{
//     alert("입주 안함");
// }
