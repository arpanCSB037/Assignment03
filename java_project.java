import java.util.Scanner;

public class StudentMarks {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter marks in Subject 1: ");
        int mark1 = sc.nextInt();

        System.out.print("Enter marks in Subject 2: ");
        int mark2 = sc.nextInt();

        System.out.print("Enter marks in Subject 3: ");
        int mark3 = sc.nextInt();

        int total = mark1 + mark2 + mark3;

        double percentage = total / 3.0;

        System.out.println("Total Marks = " + total);
        System.out.println("Percentage = " + percentage + "%");

        sc.close();
    }
}