package Chap_04;

public class _02_Else {
    public static void main(String[] args) {
        // 조건문 If Else
        int hour = 10;
        if (hour < 14) { // 조건이 True 이면
            System.out.println("아이스 아메리카노 +1");
        } else { // 조건이 fals 일경우 밑에 sout 실행
            System.out.println("아이스 아메리카노 (디카페인) +1");
        }
        System.out.println("커피 주문 완료 #1");
        // 오후 2시 이후거나 모닝 커피를 마신경우?
        hour = 10;
        boolean morningCoffee = false;
        if (hour >= 14 || morningCoffee == true) {
            System.out.println("아이스 아메리카노 (디카페인) +1");
        }else{
            System.out.println("아이스 아메리카노 +1");
            }
        System.out.println("커피 주문 완료 #2");
        }
    }

