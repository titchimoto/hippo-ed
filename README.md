
# Hippo Ed

This is my submission for the Hippo Ed technical challenge.  

[Hippo Ed Demo](https://tender-jennings-1373b1.netlify.app/)

# Directions
```
yarn install // -> this installs all module goodies
yarn start // -> to start in local/dev mode on localhost:3000
```  

## The nitty gritty

There are a number of improvements that given more time, I would choose to make to improve on the overall user experience and the re-usability and extendability of the code. There are a couple of "rough edges" that may be noticeable; small positional differences from the design, some updates to perfect animations, and certainly some efforts that could be made under the hood to improve code re-usability. The specific area of contention being the Section components, and with a little more time, a more fully-realized abstraction to reduce the slight duplication in certain places. 


-  __Browser Support:__ There were a couple of technologies that may not have full browser support, specifically IE 11 support. The ones that immediately spring to mind are:
	- __Intersection Observer__ - I am using this browser API as a quick, lightweight way to trigger the scroll animations when a specific component enters the viewport. This is not supported in IE11, but there is [an excellent polyfill available](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) that could serve this purpose.
	- __Animations__ - Due to the relative simplicity of the animations involved, I opted to use CSS Transitions to handle the animations. This is well supported in modern browsers, but certain properties do not transition well. I would certainly be open to the potential cross-platform support and stability, as well as the faster iteration loop that an animation library would provide (the `Popmotion` libraries, like `react-pose` being amongst my favorites at the moment!)

- __CSS/Styling__: I opted to use the BEM methodology (as much as possible), and decided to truly go "mobile first" whilst implementing. I approached this by working from the mobile design first and then sculpting media queries to work from there to the desktop version. However, in order to be fully-responsive and "mobile first", I would dedicate some more time to cater to some breakpoints in-between in order to fully ensure a premium experience at every resolution width.

- __Images__: In more of a production environment, I would ideally have these stashed on some kind of CDN (like, cloudfront for example), or at the very least from some form of S3 bucket.

- __Types__: Stricter, smarter typing would be beneficial as the size of the application and React props swell.



==============================================
Hippo React Native Frontend Developer Assessment
==============================================

This exercise is designed to assess how you approach tasks required in your
position as a Frontend React Native developer at Hippo. We are interested to see
how you work as well as what your final results are; include useful Git commit
messages and comments where you think your code may be unclear.

Tasks
-----

Using the provided `create-react-app` application in this repo  and the [Figma
designs](https://www.figma.com/file/VayLfjL0C8ibDVF4VVObB0/Front-End-Dev-Test?node-id=0%3A1)
please complete the following tasks:

1. Implement the styling for the four main body content areas on the homepage.
  The text content has already been added to `App.tsx` in placeholder `<span>`
  tags for your convenience. The images can be found in `Homepage-Images.zip`,
	- Consider how these content blocks might be used on other pages in the site
		(e.g. product sales pages) and create React Components as appropriate.
	- Remember to implement the animations described in the 'Animation Note'

2. Complete the Topic Cloud styling & behavior
  - Clicking an unselected Specialty should change which Topics are highlighted
  - Remember to implement the selected and hover states for all items
  - Remember to implement the animations described in the 'Animation Note'

For any details which are not clear from the designs, for example at what
size the layouts transition from stacked to side-by-side, or how the layouts
behave as the size grows, use your best judgement and feel free to explain
any choices you made and why.

Browser Support
---------------

You should test your work in the latest version of Chrome. If you use any
features that are not supported any common browser or IE 11, you should
mention these features and how you *would* provide a suitable fallback
experience if your code does not do so already.

Environment
-----------
You can use any stable version of Node JS. The base project is written using
TypeScript but you may use vanilla JavaScript to complete the tasks.

Coding Standard
---------------
Your styles should be responsive and mobile-first.

You are encouraged to use [BEM](http://getbem.com/introduction/) methodology
for CSS classnames if you are familiar with it. If you are not familiar with
BEM, you may use any naming strategy you like.

Please use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
for your code. The project is set up to lint your code using:
```sh
yarn lint
```

If your editor is not already configured to use Prettier, you can format code
in the project using:
```sh
yarn prettier-write
```

Dependencies
------------
Please use the [Yarn](https://yarnpkg.com/) tool for dependency management. You
can use any 3rd-party libraries as necessary or as desired in order to achieve
the tasks.

Commits
-------
Your commit history is important to us! Try to make meaningful commit messages
that show your progress.

Getting Started with the React Frontend
---------------------------------------
The React frontend is a bare create-react-app.

### Running the React Application

```sh
yarn install
yarn start
```
