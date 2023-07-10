package Chap_04;

public class _06_While {
    public static void main(String[] args) {
        // 반복문 While
        // 수영장에서 수영을 하는 모습
        int distance = 25;
        int move = 0;
        while (move < distance){    //현재 이동 거리가 전체 거리보다 작다는 조건이 참인 동안 반복 수행
            System.out.println("발차기를 계속 합니다.");
            System.out.println("현재 이동 거리 : " + move);
            move += 3; // 3미터 이동
        }
        System.out.println("도착하였습니다.");
        // 무한 루프
        move = 0;
        while (move < distance){
            System.out.println("발차기를 계속 합니다.");
            System.out.println("현재 이동 거리 : " + move);
        }
        System.out.println("도착하였습니다.");
        // 탈출 조건을 만드는 게 중요 move += 3; 과 같은 move < distance 일때 move 는 distance 보다 작을순 없으니 dis = 25 move =27 을 만나게 되면 탈출
    }
}
