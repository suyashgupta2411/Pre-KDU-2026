import java.util.*;
import java.io.*;

public class Part3PopularMerchandise {
    public static void main(String[] args) {

        HashMap<String, Integer> countMap = new HashMap<String, Integer>();

        // Read CSV
        try {
            File file = new File("items.csv");
            Scanner sc = new Scanner(file);

            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                String[] items = line.split(",");

                for (int i = 0; i < items.length; i++) {
                    String item = items[i].trim();
                    if (countMap.containsKey(item)) {
                        countMap.put(item, countMap.get(item) + 1);
                    } else {
                        countMap.put(item, 1);
                    }
                }
            }

            sc.close();
        } catch (Exception e) {
            System.out.println("File error.");
        }


        String top1 = "";
        String top2 = "";
        String top3 = "";

        int c1 = -1, c2 = -1, c3 = -1;

        // Top 1
        for (String key : countMap.keySet()) {
            int val = countMap.get(key);
            if (val > c1) {
                c1 = val;
                top1 = key;
            }
        }

        // Mark top1 as used
        countMap.put(top1, -1);

        // Top 2
        for (String key : countMap.keySet()) {
            int val = countMap.get(key);
            if (val > c2) {
                c2 = val;
                top2 = key;
            }
        }

        // Mark top2 as used
        countMap.put(top2, -1);

        // Top 3
        for (String key : countMap.keySet()) {
            int val = countMap.get(key);
            if (val > c3) {
                c3 = val;
                top3 = key;
            }
        }

        // Output
        System.out.println("Top 3 Merchandise Items:");
        if (!top1.equals("")) System.out.println("1. " + top1 + " = " + c1);
        if (!top2.equals("")) System.out.println("2. " + top2 + " = " + c2);
        if (!top3.equals("")) System.out.println("3. " + top3 + " = " + c3);
    }
}
