package Chap_02;
// 키가 115cm 이므로 답승 불가능 합니다
// 키가 121cm 이므로 탑승 가능 합니다
public class _06_Quiz2 {
    public static void main(String[] args) {
        int height = 120;
        String result = (height >= 120) ? "탑승 가능합니다" : "탑승 불가능합니다";
        System.out.println("키가 " + height + "cm 이므로 " + result);

        int height1 = 115;
        String result1 = (height1 >= 120) ? "탑승 가능합니다" : "탑승 불가능합니다";
        System.out.println("키가 " + height1 + "cm 이므로 " + result1);
    }
}
