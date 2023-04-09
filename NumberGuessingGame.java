import java.util.*;

public class NumberGuessingGame {
  public static void main(String[] args) {
    Random rand = new Random();
    int numberToGuess = rand.nextInt(100) + 1;
    System.out.println("I'm thinking of a number between 1 and 100. Can you guess what it is?");

    try (Scanner scanner = new Scanner(System.in)) {
      int guess = scanner.nextInt();
      System.out.println("You guessed: " + guess);

      while (guess != numberToGuess) {
        if (guess < numberToGuess) {
          System.out.println("Your guess is too low. Guess again:");
        } else {
          System.out.println("Your guess is too high. Guess again:");
        }
        guess = scanner.nextInt();
        System.out.println("You guessed: " + guess);
      }
    }
    System.out.println("Congratulations, you guessed the number!");
  }
}