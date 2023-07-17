//페이지를 연 후 3초가 지났을때 이런일을 할 것이다.
    //아이디가 box1인 녀석 안에 "hello" 라는 문자열을 추가하겠다.

    //window. 생략 할수 있다.
//     //setTimeout(function(){} (익명함수,할일), 지연시간(ms));
// // setTimeout(function(){
// //     document.getElementById("box1").innerHTML
// //     = document.getElementById("box1").innerHTML + "hello";
// // }, 3000);
// // 페이지를 연 후 3 초 마다 이런일을 할 것이다.
//     //아이디가 box1인 녀석 안에 "hello" 라는 문자열을 추가하겠다.

// // setInterval(function(){
// //     document.getElementById("box1").innerHTML
// //     = document.getElementById("box1").innerHTML + "hello";
// // }, 1000);
// // setTimeout(function(){
// //     location.href = "http://naver.com";
// // },3000);
// // redirection
// // setInterval(function(){
// //     document.getElementById("box1").innerHTML
// //     =document.getElementById("box1").innerHTML + "hello ";
// // })

// // for(i=0; true; i++){ // 조건을 true로 주면 무한의 수를 호출 -> 브라우저 먹통
// //     document.getElementById("box1").innerHTML
// //     = document.getElementById("box1").innerHTML + "hello ";
// // }
// // 한자리 숫자인 경우 앞에 "0"을 추가해주는 함수

// function addZero(num){
// //     // 재료로 들어온 숫자(num)가 만약 10보다 작다면?(한자리 숫자.)
// //         // 그 숫자 왼쪽에 "문자열 0 " 을 더해주고 가공된 숫자라고 하자.
// //     // 그렇지 않다면
// //         // 그냥 재료로 들어온 숫자를 가공된 숫자라고 하자.
// //     // 그렇게 가공된 숫자를 원청자에게 납품한다.
//     var result;
//     if(num < 10){
//         result = "0" + num; //10 미만의 num 은 문자열 "0" 을 더한다.
//     }else{
//         result = num; // 10이상부턴 num
//     }
//     return result;
// }
// function add2Zero(num){
//     var result;
//     if(num < 10){
//         result = "00" + num;
//     }else if(num < 100){
//         result = "0" + num;
//     }else{
//         result = num;
//     }
//     return result;
// }

// var clock = setInterval(function(){
//     // 현재 시간을 캡처한다.
//     // 당시의 시, 분, 초를 알아낸다.
//     // 각각 시, 분, 초가 한자리 숫자인 경우 addZero함수를 이용해 0을 붙인다.
//     // 이렇게 만둘어진 시, 분, 초를 시:분:초의 형태로 만들어서
//     // 아이디가 box1이라는 녀석에 내용으로 써준다.
//     //Date(); 함수안에 요소를 비워두면 현재 시간을 지정
//     // now.get 시간을 갖고 오는것 Date 안에있는 get~~ 요소를 갖고온다.
//     // now.set 사용자가 입력하는것 Date 안에있는 set~~ 요소를 넣어준다.
//     var now = new Date();
//     var hour = now.getHours();
//     var min = now.getMinutes();
//     var sec = now.getSeconds();
//     var msec = now.getMilliseconds();
//     hour = addZero(hour);
//     min = addZero(min);
//     sec = addZero(sec);
//     msec = add2Zero(msec);
//     var time = hour + ":" + min + ":" + sec + ":" + msec;
//     document.getElementById("box1").innerHTML = time;
// },7 20);

// // 문서에서 아이디가 "clockStopBtn"이라는 녀석이 눌리면 이런일을 할 것이다.
//     //clock 이라는 interval을 멈추자
// document.getElementById("clockStopBtn").onclick = function(){
//     clearInterval(clock);
// }
// // document.getElementById("box1").style.color = "red";
// // jQuery -> $("#box1").css("color","red")
// // for(i=0; i<100; i++){
// //     window.open("http://naver.com", "win1"+i); //naver 트래픽 공격이 될수있음.
// // }
// var arr = ["김태희","정지훈","홍길동","임꺽정","일지매"];
// document.getElementById("addName").onclick = function(){
//     var name = document.getElementById("userName").value;
//     arr.push(name); //input 을 받아 배열뒤에 들여넣을수 있다.
//     alert(arr);
// }
// document.getElementById("delName").onclick = function(){
//     arr.pop();
//     alert(arr);
// }

// var num = "4.50$";
// num = parseInt(num);
// alert( num*2);
// pow(2,10) 2의10승 floor 수를 버림 ,ceil 올림 ,round 값 반올림.

// alert( Math.random()); 0 에서 1미만의 숫자
// 최소값, 최대값을 지정하고 그 사이에서 랜덤한 정수를 만드는 함수.
// Math.random()       = > 0 ~ 1
// alert(Math.random()*5 ) 0 ~ 5;
// alert(Math.random()*(5-2)+2) (최대값-최소값) + 최소값 2 ~ 5
// 버림 (Math.random()*(최대값-최소값-1)
// function rand(min,max){
//     return Math.floor(Math.random()*(max-min+1) + min );
// }
// var count = [0,0,0,0,0,0];
// for(i=0; i<10000; i++){
//     var num = rand(1,6);
//     count[num-1]++;
// }
// alert(count);\
// 태그는 복수취급을 해서 (배열) [index 숫자]

//     var r = rand(0,255);
//     var g = rand(0,255);
//     var b = rand(0,255);

// document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+r+","+g+","+b+")";

// var text = "안녕하세요.하하입니다."
// alert( text.charAt(4) );
// alert(text.substring(2,5)); index 2 에서 5 미만
// alert(text.substr(2,5));

// path에서 확장자 추출하기
// var path = "abc/fff/123/1234/124155/eee.jhkh.jpg"; 
// path = path.split("/");
// var ext = path[path.length-1].split("."); 
// ext = ext[ext.length-1]; // 확장자
// alert( ext ); // 마지막번째 directory 확인
// var path = location.href;
// path = path.split("/");
// var ext = path[path.length-1].split(".");
// ext = ext[ext.length-1]; // 확장자
// alert( ext );

document.getElementById("attBtn").onclick = function(){
    var path = document.getElementById("attach").value;
    path = path.split("/");
    var ext = path[path.length-1].split("."); //
    ext = ext[ext.length-1];
    alert(ext);
}