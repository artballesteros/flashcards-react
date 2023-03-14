# Web Development Project 2 - *React.js Study Flashcards*

Submitted by: **Arturo Ballesteros-Ontiveros**

This web app: **Flashcards covering React.js concepts... written in React.js**

Time spent: **6** hours spent in total

## Required Features - Part 1

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **additional** features are implemented:

* [x] Rotating Reat logo with link to the React.js website

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/fdNuFdK.gif' title='Video Walkthrough' width='500px' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Required Features - Part 2

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/WgOwDKH.gif' title='Video Walkthrough' width='500px' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

Describe any challenges encountered while building the app.
1. I initially overengineered it and tried creating new components for everything. This created many bugs.
Eventually, I just kept the most important components (Card and Header).
2. I had trouble rendering the components. Turns out I had misspelled a couple things... 
3. Flipping the cards was a pain. Initially the card would just flip during an active click and return to 
it's original position once I let go. I realized that I was changing the state of the flip (flip or don't flip) 
one component too high the ReactDOM. This created a loop where I would click --> !flip --> let go --> oh it's !flip, !flip again. 
At least that's what I think happened...
4. Rotating the react svg didn't work at first. I had my selectors written incorrectly.

## License

    Copyright 2023 Arturo Ballesteros-Ontiveros

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.