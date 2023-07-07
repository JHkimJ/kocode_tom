package chap_03;

public class _03_StringCompare {
    public static void main(String[] args) {
        //문자열 비교
        String s1 = "Java";
        String s2 = "Python";

        System.out.println(s1.equals("Java")); //문자열 내용이 같으면 true 다르면 false
        System.out.println(s2.equals("python")); // 대소문자를 구분한다 false
        // 대소문자 구분없이 문자열 내용만 참거짓 확인
        System.out.println(s2.equalsIgnoreCase("python"));

        // 문자열 비교 심화
        s1 = "1234";    // 벽에 붙은 메모지의 비밀번호 정보 (참조)
        s2 = "1234";
        System.out.println(s1.equals(s2)); // true
        System.out.println(s1 == s2); // true

        s1 = new String("1234"); // 서로 다른 객체
        s2 = new String("1234"); // 서로 다른 객체
        System.out.println(s1.equals(s2)); // true (내용)
        System.out.println(s1 == s2);   // false


    }
}
