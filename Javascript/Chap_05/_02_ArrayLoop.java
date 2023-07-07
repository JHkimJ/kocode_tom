package Chap_05;

public class _02_ArrayLoop {
    public static void main(String[] args) {
        // 배열의 순회
        String[] coffees = {"아메리카노", "카페모카", "라떼", "카푸치노" };
                // for 반복문 순회
        for (int i = 0; i < 4; i++) {
            System.out.println(coffees[i] + "하나"); // 인덱스 번호 지정 안해도 인덱스모든값 호출
        }
        
        System.out.println("주세요");

        System.out.println("--------------------");
        
        // 배열의 길이를 이용한 순회
        for (int i = 0; i < coffees.length ; i++) { // 배열크기를 모를때
            System.out.println(coffees[i] + "하나");
        }
        System.out.println("주세요");
        System.out.println("------------------");

        // enhanced for (for-each) 반복문
        for (String coffee : coffees){         // 보다 간결하게 배열 순회
            System.out.println(coffee + "하나");
        }
    }
}
