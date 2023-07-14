package Chap_05;

public class _05_ASCIICode {
    public static void main(String[] args) {
        // 아스키 코드 (ANSI) : 미국 표준코드
        char c = '0'; // 알파벳 대문자 : 65부터 시작, 소문자 97 부터 시작, 숫자(0)은 48부터 시작.
        System.out.println(c);
        System.out.println((int)c); //ASCII 코드 값

        c = '1';
        System.out.println(c);
        System.out.println((int)c);

        c++;
        System.out.println(c);
        System.out.println((int)c);

        String[][] seats3 = new String[10][15];
        char ch = 'A';
        for (int i = 0; i < seats3.length; i++) { //세로
            for (int j = 0; j < seats3[i].length; j++) { //가로
                seats3[i][j] = String.valueOf(ch) + (j + 1);
            }
            ch++;
        }

        for (int i = 0; i < seats3.length; i++) { //세로
            for (int j = 0; j < seats3[i].length; j++) { //가로
                System.out.print(seats3[i][j]+" "); // A1 A2 형태로 공백 부여
            }
            System.out.println();
        }
    }
}
