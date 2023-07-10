package Chap_04;

public class _01_if {
    public static void main(String[] args) {
        // 조건문 if
        int hour = 15 ;
        if (hour < 14)
            System.out.println("아이스 아메리카노 +1");

            if (hour < 14) {
            System.out.println("아이스 아메리카노 +1");
            System.out.println("샷추가");
        }
        System.out.println("커피 주문 완료");

            hour = 10;
            boolean morningCoffee = false;
            //if (hour < 14 && morningCoffee == false) {
                if (hour < 14 && !morningCoffee) {
                System.out.println("아이스 아메리카노 +1");
            }
        System.out.println("커피 주문 완료");
                // 오후 2시 이후 거나 모닝 커피 마신경우?
        hour = 15;
        morningCoffee = true;
        //if (hour >= 14 || morningCoffee == true) {
        if (hour >= 14 || morningCoffee) {
            System.out.println("아이스 아메리카노 (디카페인) +1");
        }
        System.out.println("커피 주문 완료 #3");

    }
}
