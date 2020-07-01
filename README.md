## About this app
This is a personal side project of mine (made with React and Redux), which is based on a anime community app (namely, Kitsu) I'm very fond of. It is designed to showcase the most recent and core React skills (as of 2020). I've also talked with the team behind it, they're planning to switch to React in the near future (2020), I'll likely contribute to its open source thereafter.

## Live demo at aniworld.netlify.app/

Home Page            |  Single Anime
:-------------------------:|:-------------------------:
![](https://i.ibb.co/s6gn99B/index.png)  |  ![](https://i.ibb.co/Rvzvz8Q/each-anime.png) 

Category Showcase        |  Advanced Search
:-------------------------:|:-------------------------:
![](https://i.ibb.co/HzhgQS2/categories.png)  |  ![](https://i.ibb.co/hRZQWJn/advanced.png) 

## How to run it

Simply type consecutively:

### `npm i`
### `npm start`

## Technical comments

This project has lots of modern and advanced features, such as the hook system, a great deal of content managed with Redux, Higher Order Components to make it easy to reuse logic throughout the app and much more. It also contains quite a good deal of complex design system, handled mostly by the new grid and flex system, even complex structures such as the the hovering effect is handled by these two powerful tools.

## Issues

Now, I must say if there's one thing that I think I could have done better is the overall design pattern. Needless to say, I've done it from the absolute ground up, so there was alwways the possbility of committing some crimes in this regard. If you want a more robust and mature version of my current design pattern, you can check out my new Real Estate app https://github.com/rmc-softdev/RealEstateFrontend. Also, I should point that the requests are not 100% optimal, it could've been way better perfomance wise (for example, I did a bit more requests when you load the Home Page than you'd actually need and already stored it in the Redux for later use, but this is not a very scalable code practice).
