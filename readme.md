## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
- Calculate's the correct tip and total cost of the bill per person
### Links

- Solution URL: [How to round numbers in JS](https://www.w3schools.com/jsref/jsref_tofixed.asp#:~:text=The%20toFixed()%20method%20converts,a%20specified%20number%20of%20decimals.)
- Live Site URL: [How to use eventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Array
- map
- responsive
- object.eventListener
- functions
- background-picture
- hover
- button
- Dom
- toFixed

### What I learned

It was the biggest challenge for me yet in my career. I almost worked more then 1 week on this project and i fell that i earned huge self-confidence which is giving me desire to do more and more work and improve my self. I learned how to think logically and how to do multitasking.



```Javascript
winCondition.map((combination)=>{
        if(!checkO){
            checkO = combination.every((number)=>indexOfO.includes(number));
            if(checkO){
            combination.map((winnerCombination)=>{
                clickBox[winnerCombination].style.backgroundColor = '#F2B137';
                clickBox[winnerCombination].firstChild.src ="./assets/icon-of-winner-o.svg";
            })
        }
        } 
    })

```


### Continued development
 
It was another great project and development for me.Now i am looking to do as much as possible projects like this to feel more and more comfortable and self-confident nad then i am going to use back-end development and work with servers and connect front and back sides to each other.

### Useful resources

- [Example resource 1](https://eloquentjavascript.net/index.html) -Great book to learn all important details in JS.
- [Example resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/length) - Every one can find all details and information about programing languages.

## Author

- Website - [Alexander Tsamalashvili](https://github.com/AlexTsamala)
- Frontend Mentor - [Otar Zakalashvili](https://www.linkedin.com/in/otarza/)
- Linkdin - [myLinkdin](https://www.linkedin.com/in/aleksandre-tsamalashvili-40501a1a0/)


## Acknowledgments

I got huge help from my mentor Nika Nozadze.