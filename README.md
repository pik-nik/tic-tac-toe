# Tic Tac Toe :x: :o:
Hello, welcome to my ***first ever project***! :tada: 
In a bit over 2 days, I created a Tic Tac Toe game using HTML/CSS/JavaScript.

Grab a friend (or foe) and check out my game here: 

https://pages.git.generalassemb.ly/piknik/project1_tic_tac_toe/

## Goals for making the game 
These were the goals that I had set in order to get a functional game running: 
* Create a basic 3x3 grid where each grid/box responds to a click 
* Have a display which shows who's turn it is and changes once the player has gone
* Have the click function toggle between X and O in the boxes based on the player's turn 
* Once a box is clicked, the player cannot reclick the same box 
* Add condition statements so that when a win or draw happens, the game is finished 
* If there is a win, no more boxes can be clicked
* When the game is finished, there is a pop up message that reveals the results of the game and a "Play Again" button which resets the game

## Building my MVP :building_construction:

### The Thought Process :thought_balloon:
I started off by creating a wireframe to jot down initial thoughts and work out how I would like to structure my page. You can check out my wireframe here: https://whimsical.com/tic-tac-toe-wireframe-W5MCxfLSh4HVPx8P7Ck63V

I then started building the basic layout of my page.
![](README%20images/Screenshot%201%20Initial%20Planning%202023-02-22%20at%201.55.56%20pm.png)
*Initial planning replicating the styling of my wireframe using HTML/CSS*

### A lot of hard coding later...
[Making my MVP](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/d54b0414878379287eb949f341e99f591556204b) was a repetitive process for me as I found myself hard coding a lot to get a functional game working. This included: 
* Having my condition statement to determine who's turn it was based on the text content of the player number which then swapped in the same code block 
    ```
    if (playerNumber.textContent === "1") {
        boxClicked.textContent = "X"
        playerNumber.textContent = 2
    } else {
        boxClicked.textContent = "O"
        playerNumber.textContent = 1 
    }
    ```
* Having multiple if else statements for each possible win condition for each player which meant I had 16 total when really only 3 was needed 
* Classing each of the 9 separately and creating variables to return each element/box separately 
* Hard coding my congratulations message in my HTML which lead to my [first bug](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f86091a81da32e9c49f93c8f487707fcf6ed705f) :bug:
    - My initial message was set as default for a win with a span to change the player number based on who won. 
    ```
    <p class="game-complete-message">Congratulations, Player <span class="winning-player-number"></span> has won!</p>
    ```
    - This worked well for the win conditions BUT if there was a draw, the message was overwritten with the draw message which was added in JavaScript. This wouldn't update if there was a win on the subsequent round. 
    ```
    gameCompleteMessage.textContent = "Awww, it's a tie"
    ```

    ![bug 1](README%20images/First%20Bug%20Screenshot%202023-02-22%20at%204.19.49%20pm.png)
    *The message reads that it is a tie even though Player 2 has won*

    - My initial fix was to change the text content back to the default Congratulations message in my `resetGame()` function, but the span was still overwritten. 
    - I then changed the message to read different so that I could change the number at the end of the sentence. 
        - This also mean't adding CSS styling to ensure the two paragraph tags were still read in the same line. 
        - I also had to toggle between the visibility of the winning player number too which mean't an extra line in each of my if else conditions. It was a tedious fix for my initial MVP but it worked. 
    ```
    <p class="game-complete-message">Congratulations! The winner is Player </p> <p class="winning-player-number">1</p>
    ```
    - It was a messy fix good enough to get my MVP running but would definitely require refactoring.

[Check out my final MVP here](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f86091a81da32e9c49f93c8f487707fcf6ed705f)

## Refactoring my MVP 
These where the fixes I made to refactor my MVP.
* 


After my MVP was submitted- I removed the hard coded comment so that the comment can be adjusted in the JavaScript. I did this by combining all my possible winning conditions in my first if statemement using OR 

However, this lead to a very long if condition statement and I was looking  for ways to figure out how to shorten this...
- CONTINUE HERE 

## Styling 
### Early Stages with MVP 
Styling with CSS was very basic in the early stages. I created a grid but made the height and width constant on my grid and each individual box to ensure that I had a 9x9 square grid running so I could get started on the functionality of the game. This did the job but was not great for small screens.

### Fixing the grid formatting 


## Adding some bonus features 
Now that my code was refactored, time for the fun part...  adding in some bonus features
https://whimsical.com/tic-tac-toe-wireframe-bonus-features-7SGCq5qfDiBGL6h2QrAP2V

### Keep track of multiple game rounds with a win counter
I added a win count for each player and a tie counter
### Adding a round counter 

### Adding a hover feature 

### Changed cursor to pointer to click boxes/button and non allowed on boxes that can't be clicked

## Things that I want to do to improve my game 
* Change the grid so that it dyanamically changes size and is a better user experience for small screens and phones - a quick fix would be doing a media inquiry 
* Fix the size too bix for laptop, was ok on desktop 
* Add classes for my CSS styling and use class lists to add them in and out



## Known bugs
* The tie counter increments in 8's everytime there is a tie. A temporary fix is dividing this number by 8 but there are times it doesn't give a whole number.

## The Final Product 

## Some Changes I would like to make in future: 