# Battleship
This README file is dedicated to the repository of Team 4's _Battleship_ project. In it you will find the following folders:

| File | Purpose|
|------|--------|
| documentation | Project & User documentation. |
| src | Source files.  |

The **documentation** folder contains a record log of the time spent working on this project. More information on that can be found below. 
The **src** folder contains the source files required to run our _Battleship_ program. In it, you will find the following files:

| File | Purpose|
|------|--------|
| battleship.js | Logic file used to handle in-game events (Cycle between players). |
| gamegrid1.js | Generates and modifies Player 1's game-board (Left hand side). |
| gamegrid2.js | Generates and modifies Player 2's game-board (Right hand side). |
| gamelogic.js| Logic file containing various game related functions. |
| style.css | Establishes the sizes, colors, and text formatting for each object in the html file. |
| battleship.html | Creates the webpage, establishes 'containers' and pulls in .js files.  |


## Installation
Our Battleship game functions by using a combination of JavaScript and HTML. To run:
- _**Clone**_ or _**download**_ the repository to your local machine,
- Locate and navigate to the source files (**battleship/src**) in your file explorer,
- Launch the _**battleship.html**_ file into a browser.

> Any web browser will launch the program, however after significant testing we found that a **Chromium** browser with a **higher resolution** provided the best image and performance.

## Contributing
For those interested in modifying or contributing to this project, please _**fork**_ or _**clone**_ the repository to your local GitHub. 
In addtion, our team has developed some ideas for future improvements that we simply didn't have time to implement prior to the deadline (either due to complexity or code constraints).

| Implementaion | Reasoning |
|------|--------|
| Single-player | Implement an AI that can play against the player. |
| Levels of Difficulty (SP) | Create an AI with varried levels of difficulty. |
| Random Ship Placement | For both players and AI, an option to randomly place ships. |
| Unique Bullets | Similar to a score-streak, give the player(s) unique shot options. |
| Scoreboard | Keep track of who has more hits, or who has won more games. |
| New Game +| Create a mechanic that rewards consistent wins. |

As contributions grow larger and the files become more complex/intertwined, we recommend finding an alternative solution to the < div > containers currently used. As it stands, additions to the game screen require substantial JavaScript bloat to hide/show elements.


> Additionally, make sure to include any _**new**_ files under the script inclusion listed at the bottom of the html:

```html
    <script type="text/javascript" src="./static/gamelogic.js"></script>
    <script type="text/javascript" src="./static/battleship.js"></script>
    <script type="text/javascript" src="./static/gamegrid1.js"></script>
    <script type="text/javascript" src="./static/gamegrid2.js"></script>
</html>
```

## Documentation
Within the _Battleship_ repository, there is a folder labeled **documentation**. This folder was used to both _estimate_ and _record_ our total time spent developing this project. Here, it also serves to familiarize any team with how our software works, as to avoid confusion. 

> While this isn't much use to anyone who contributes this the project later, feel free to add columns/tabs for your team to measure how long improvements or changes you've made took.

For those who contribute to this project at a later date, please make sure to adequately comment the code. If major changes are made please be sure to _specify_ **why** these changes were made, and how they improve upon the original design.

#### Tutorial
This program follows the basic rules of _Battleship_. While the program itself provdes the user with some basic rules, it is also listed here as a redundancy. 
- First, you must select 'Start', then select the number of ships you wish to play with, then click 'Go'.
- Next  you will be prompted with a set of rules, similar to what is listed here. To continue, select 'OK'.
- You will then be greeted by two 10-by-10 boards. Player 1 places their ships first.

> Quick Tip - Ships are identified as x -by- 1 squares and can't be placed diagonaly. So, for three ships, you will need to place three different sized ships. For specifics, see the chart below.

- Using the chart below, place the same number of ships as what you selected on the previous screen. 
- Once a vaild set of ship placements has been detected, a button will apear as 'Place Ships'. Click it to proceed.
- Repeat the previous two steps for Player 2. Again, click 'Place Ships' to continue. 
- Player 1 starts by default. Click on a square in Player 2's grid to shoot there, then click 'End Turn'.

> Note - Once you click on a cell, you shoot. So be sure its the cell you want before you click!

- After Player 1 clicks 'End Turn', the game switches to Player 2. (_**The current player is always highlighted**_)
- Repeat the previous two steps until one player has sunken all their opponent's ships.

> Miss -> Dark-Blue // Hit -> Bright Red  // Sunk -> Black

- Once a player has been defeated, the option to 'Play Again' will take you back to the main screen.

| Number of Ships | Ships to be Placed (1 of each) |
|------|--------|
| 1 Ship | 1 x 1 |
| 2 Ships | 1 x 1, 2 x 1 |
| 3 Ships | 1 x 1, 2 x 1, 3 x 1 |
| 4 Ships | 1 x 1, 2 x 1, 3 x 1, 4 x 1 |
| 5 Ships | 1 x 1, 2 x 1, 3 x 1, 4 x 1, 5 x 1 |


## Development

##### Why JavaScript?
- We felt that while Battleship was achievable in an object oriented lanugage like C/C++, we wanted to strive towards a project that not only _functions_, but also has a certain visual appeal.
- While certain compromises were made to meet the required deadline, we still feel as though our software represents a unique take on the classic _**Battleship**_ game.


## License
This software is not currently liscensed in any capacity or copyrighted in any way. However, while permission to use this software for personal development is allowed, commercial use is **not**.