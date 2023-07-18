//JavaScript 는 기본적으로 client 기준임
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth(); // 7월은 6이 나옴 그래서 +1 증감해서 7로 보여주거나 배열호출시에 해당 month를 뽑아주기 위해 증감을 안하고 쓸수있다.
// var wol = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// alert(wol[month]);
// alert(month + 1);
var date = now.getDate();
var ms = now.getMilliseconds();
// 한자리 숫자 일때 좌측에 0을 추가해주는 함수
function addZero(num){
    var result = "";
    if(num < 10){
        result = "0" + num;
    }else{
        result = num;
    }
    return result;
}

var day = now.getDay();
var yoil = ["일","월","화","수","목","금","토"];

month = addZero(month + 1); // = 6 +1
date = addZero(date);

// 2023-07-18 AM 10:00

var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();
var ampm = "";

if(hour >= 12){    
    ampm = "PM";
    hour = hour - 12;
}else{
    ampm = "AM";
}
if(hour == 0){
    hour = 12;
}
hour = addZero(hour);
min = addZero(min);
sec = addZero(sec);

ms = addZero(ms);
var naljja = year+"-"+month+"-"+date+" "+yoil[day];
naljja += " "+ ampm + hour +":"+min+":"+sec + ":" + ms;
// alert(naljja);
// -----------------------날짜 계산기--------------------------------------------------
//timestamp 이용한 날짜 계산
// 2022-02-03 이 날로부터 며칠 지났는지?
// 2022-02-03 이라는 이 시간
// now에서 2022-02-03 이라는 이 시간을 빼면 => 지나온 세월
// now의 timestamp에서 2022-02-03의 timestamp를 빼면 => 지나온 세월 (timestamp)=> 일자로 계산
document.getElementById("dateBtn").onclick = function(){
    var date = document.getElementById("date").value;
    var anni = new Date(date);
    var anniTimestamp = anni.getTime();
    var nowTimestamp = now.getTime();
    var duration = nowTimestamp - anniTimestamp;
    duration = duration / 1000;
    duration = parseInt(duration); // integer(정수)

    // 하루 = 24시간 = 1440분 = 86400 초
    duration = duration/86400;
    duration = Math.floor(duration);
    document.getElementById("result").value = duration+"일 째입니다.";
}
    // 이름이 jQuery 인 이유 Javascript Query (질의)
    // jQuery 안에 커맨드를 부른다.
// $("#apple p>span") $ -> 호출 ("id tag>tag")
// $(".banana") banana class 호출
// box?가 여러개일때
// for(i=1; i<=100; i++){ 
//     $("#box"+i);
// }

// ㅇㅇ야 걸어가라.
// $("ㅇㅇ").walk();
// 날씨가 비올때 ㅇㅇ야 뛰어가라.
// $("ㅇㅇ").비올때(function(){
//     $("ㅇㅇ").뛰어가라();
// });

// 까마귀 날자 배 떨어진다.
// $("까마귀").날때(function(){
//   선택자   이벤트  함수
//    $("배").떨어진다();
// });

// ㅇㅇ가 기쁠때 ㅇㅇ는 박수를 쳐라  "" 따옴표는 태그 선택자
// $(this).기쁠떄(function(){
//     $(this).박수치기();
// });

// 남자가 화났을때 그 화난 사람만

// #list>li 에 마우스를 올렸을때
// #list>li는 빨개진다.
// $("#list1>li").mouseover(function(){
//     $(this).css("color","red");
// });
// $("#list1>li").mouseout(function(){
//     $(this).css("color","black");
// });
$(document).ready(function(){
    
    $("#list1>li").dblclick(function(){
        $(this).hide();
    });
    $("#nation").change(function(){
        alert($(this).val());
    });

    $("input").focus(function(){
        $(this).css("outline","2px solid red");
    });
    $("input").blur(function(){
        $(this).css("outline","none");
    });
    // #input1에서 글자가 쓰여질때마다
        //그 내용을 #final에 적겠다.
    $("#input1").keyup(function(){
       var t = $(this).val(); 
       $("#final").text(t);
    });

    $("#submit").click(function(){
        alert();
    });

    $("#input2").keyup(function(event){
        if(event.keyCode == 13){
            $("#submitBtn").triger("click");
        }
    });
    // 마우스가 움직일 때마다 이런일들을 하겠다.
        //방금 움직인 마우스의 x,y좌표를 찾아라.
        // #fly인 녀석에게 x,y좌표를 통해 위치를 지정해준다.
    // $(document).mousemove(function(event){
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     $("#fly").css({left:x+"px", top:y+"px"});
        
    // });

    // .main 에 마우스 올렸을때 이런일이 발생.
        // 방금 그것의 자식중 .sub를 보여주자
    // .main에서 마우스 치웠을때 이런일이 발생.
        // 방금 그것의 자식중 .sub를 숨기자.
    $(".main").mouseenter(function(){
        $(this).children(".sub").stop().fadeIn(); //.stop() 이전 동작을 멈추고 > fadeIn 실행
    });
    $(".main").mouseleave(function(){
        $(this).children(".sub").stop().fadeOut(); //.stop() 이전 동작을 멈추고 > fadeOut 실행
    });
    
});
// change(); select 태그에 주로 사용
// mouseover mouseout 은 bubbling 이슈가 있다 . 그래서 mouseleave.mouseenter 를 자주 사용***