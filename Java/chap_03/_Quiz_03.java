package chap_03;

public class _Quiz_03 {
    public static void main(String[] args) {
        String id = "930801-1408818";
        System.out.println(id.substring(0, 8)); //0의 위치부터 8 위치 까지
        id = "030708-4567890";
        System.out.println(id.substring(0, id.indexOf("-") + 2)); // 0 위치부터 하이픈 위치 + 2 직전 까지
    }
}
