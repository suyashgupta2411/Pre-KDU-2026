import java.util.Scanner;

public class Part1UsernameChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input
        System.out.print("Enter username: ");
        String username = sc.nextLine();

        System.out.print("Confirm username: ");
        String confirmation = sc.nextLine();

        // Processing
        int len1 = username.length();
        int len2 = confirmation.length();
        boolean lengthMatch = (len1 == len2);
        boolean stringMatch = username.equals(confirmation);

        // Output
        System.out.println("Length 1: " + len1);
        System.out.println("Length 2: " + len2);
        System.out.println("Lengths match: " + lengthMatch);
        System.out.println("Strings match: " + stringMatch);

        sc.close();
    }
}