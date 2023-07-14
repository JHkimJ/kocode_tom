package Chap_04;

public class _05_For {
    public static void main(String[] args) {
        //반복문 for
        // HNM 매장
        System.out.println("어서오세요. HNM 입니다.");
        // 또 다른 손님이 들어오면?
        System.out.println("어서오세요. HNM 입니다.");
        System.out.println("어서오세요. HNM 입니다.");
        // 만약에 인사 법이 바뀌면?
        System.out.println("환영합니다. HNM 입니다.");
        System.out.println("환영합니다. HNM 입니다.");
        System.out.println("환영합니다. HNM 입니다.");
        System.out.println("환영합니다. HNM 입니다.");
        //매장 이름이 바뀌면?
        //HNM -> H&K
        System.out.println("어서오세요. H&K 입니다.");

        //반복문 사용 for
        for (int i = 0; i < 10; i++) {
            System.out.println("환영합니다 . H&K 입니다" + i);
        }
            for (int i = 0; i < 10; i += 2) {
                System.out.print(i);
            }
            System.out.println();

            for (int i = 1; i < 10; i += 2) {
                System.out.print(i);
            }
        System.out.println();
            for (int i = 5; i > 0; i--  ){
                System.out.print(i);
            }
            int sum = 0;
            for (int i = 1; i <= 10; i++){
                sum += i;
                System.out.println("현재까지 총합은 " + sum + "입니다.");
            }
        System.out.println("1부터 10까지의 모든 수의 총합은" + sum + "입니다.");
    }
}

