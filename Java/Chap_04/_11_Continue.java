package Chap_04;

public class _11_Continue {
    public static void main(String[] args) {
        //continue

        // 치킨 주문 손님중 노쇼 손님 발생
        // For

        int max = 20;   // 최대 치킨 판매수량
        int sold = 0;   // 현재 치킨 판매수량
        int noShow = 17; // 대기번호 17번 노쇼
        for (int i = 1; i <= 50; i++) {
            System.out.println(i + "번 손님, 주문하신 치킨 나왔습니다.");
            //손님이 없다면? (noShow)
            if(i == noShow){
                System.out.println(i + "번 손님, 노쇼로 인해 다음 손님에게 기회가 넘어갑니다.");
                continue;
            }
            sold++; // 판매처리
            if (sold == max){
                System.out.println("금일 재료가 모두 소진되었습니다");
                break;
            }

        }
    }
}
