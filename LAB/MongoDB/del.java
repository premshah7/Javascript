public class del {
    public static int addDigits(int num) {
        int temp = num / 10;
        int rem = num % 10;
        int ans = temp + rem;
        while(ans < 10){
            temp = num / 10;
            rem = num % 10;
        }
        return ans;
    }

    public static void main(String[] args) {
        System.out.println(addDigits(38));
    }
}