
// window.open("주소","대상","옵션");\\
// 대상 -> command : _self > 현재페이지, 
// 옵션 -> command : 너비,높이 > "width=500,height=300,모니터좌표 top(y)=100, left(x)=300" /*새창으로 띄우기*/

let child="";

$(function(){
    $("#open_child").click(function(){
        
        if( $("#name").val() == '' ){  //input 태그에 이름을 입력안했다면 val 값이 공백이 true 인경우
            alert("이름 먼저 입력하세요");
            $("#name").focus();
            return;
        }

        child = window.open("child.html","","width=500,height=300,top= 100, left= 300");

    });
    $("#child_send").click(function(){

        $(child.document).find("input_name").html("aaa").val();
    });
});
