import java.util.*;
public class Part2TicketCategories {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<String> list = new ArrayList<String>();
        HashSet<String> set = new HashSet<String>();
        HashMap<String, Integer> map = new HashMap<String, Integer>();

        
        System.out.println("Enter 10 ticket categories separated by commas:");
        String input = sc.nextLine();

        // Split into items
        String[] items = input.split(",");

        
        for (String category : items) {
            String c = category.trim();   

            list.add(c);
            set.add(c);

           
            if (map.containsKey(c)) {
                map.put(c, map.get(c) + 1);
            } else {
                map.put(c, 1);
            }
        }

        // Output
        System.out.println("\nArrayList: " + list);
        System.out.println("HashSet: " + set);
        System.out.println("HashMap: " + map);

        sc.close();
    }
}
