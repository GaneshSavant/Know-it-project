package array;

public class Armstrong {

	public static int countDigits (int n) {
		int count=0;
		
		while (n != 0)
		{
			n = n/10;
			count++;
		}
		return count;
	}
	public static int pow(int a, int b)
	{
		int mul=1;
		for (int i=0; i<b; i++)
		{
			mul=mul*a;
			
		}
		return mul;
	}
	
	public static void printArmNo()
	{
		 for(int i=1; i<10000; i++)
		 {
			 int temp=i;
			 int sum=0;
			 int n=i;
			 int a;
			 int cnt=countDigits(i);
			 while(n>0)
			 {
				 a=n%10;
				 sum=sum+pow(a,cnt);
				 n=n/10;
				 
			 }
			 if(sum==temp)
			 {
				 System.out.println(sum);
			
			 }
		 }

	}
	public static void main (String [] args)
	{
		printArmNo();
	}

}
