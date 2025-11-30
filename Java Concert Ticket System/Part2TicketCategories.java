import java.util.*;

public class Part2TicketCategories {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<String> list = new ArrayList<String>();
        HashSet<String> set = new HashSet<String>();
        HashMap<String, Integer> map = new HashMap<String, Integer>();

        // Input
        for (int i = 0; i < 10; i++) {
            System.out.print("Enter ticket category " + (i + 1) + ": ");
            String category = sc.nextLine();

            // Adding to ArrayList
            list.add(category);

            // Adding to HashSet
            set.add(category);

            // Count stored in HashMap
            if (map.containsKey(category)) {
                map.put(category, map.get(category) + 1);
            } else {
                map.put(category, 1);
            }
        }

        // Output
        System.out.println("\nArrayList: " + list);
        System.out.println("HashSet: " + set);
        System.out.println("HashMap: " + map);

        sc.close();
    }
}