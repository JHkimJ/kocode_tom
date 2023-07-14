var pTime = prompt("주차시간 분(단위) 입력");
var fee = 0;

if(pTime <= 30){
    fee = 1000;
}else if(pTime <= 120){
    fee = 1000 +;
}else if(pTime <= 280){
    fee = 1500 +;   
}else if(pTime <= 480){
    fee = 2500 +;
}else{
    fee = 5000;
}

    document.write("주차요금 "+fee+"입니다");