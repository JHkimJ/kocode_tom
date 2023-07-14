// html 안에 script 태그가 id,class 등 보다 먼저 있으면 실행이 안된다.
// script태그는 맨밑에 위치하는게 오류를 줄일수있음.
// while, for ~하는 동안은 계속 반복된다.
/* for(시작값; [(반복횟수), 조건식] ; 증감식){ 반복 
    내용 
}  */
// i는 반복한 횟수를 의미

// for(i=0; i<5; i++){
//     document.getElementById("para1").innerHTML = document.getElementById("para1").innerHTML + i
// }
//0부터 100까지의 정수를 더하는 코드를 작성하시오.
// var total = 0;
// // for(i=0; i <= 100; i++){
// //     total = total + (100-i);
// // }
// for(i=100; i>=0; i--){
//     total = total + i;
// }
// document.getElementById("para1").innerHTML = total;

// var total = 0;
// for(i=0; i<=100; i++){
//     if(i % 2 == 0){
//         total = total + i ;
//     }
// }
// for(i=0; i<=100; i++){
//     if(i % 2 == 1){
//         total = total + i ;
//     }
// }
 
// document.getElementById("para1").innerHTML = total;

// var star = "";

// for(i=0; i<10; i++){
//     star = star + "<b>ㅎ</b>";
// }
// document.getElementById("para1").innerHTML = star;

// id = date 태그의 내부에 <option></option>를 기입하는 행위를
// 31번 반복하되 옵션태그 내에는 1부터 31까지의 숫자가 들어가야 한다.
// 반복해라 31번..
    //아이디 date 에 내용추가1
        // <option>{반복한횟수 + 1}</option>
// var tag = "";

// for(i=0; i<31; i++){
//     tag = tag + "<option>" + (i+1) + "</option>";
// }
//     document.getElementById("date").innerHTML = tag;

// 오감도 - 이상
// var fiveSense = "";
// var chinese = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一","十二","十三"];
// for(i=0; i<13; i++){
//     if(i == 0 || i == 10 ){
//         fiveSense = fiveSense + "제 " +chinese[i]+"의 兒孩가 무섭다고 그리오<br>"
//     }else{
//         fiveSense = fiveSense + "제 " +chinese[i]+"의 兒孩도 무섭다고 그리오<br>"
//     }
// }
// document.getElementById("para1").innerHTML = fiveSense;

