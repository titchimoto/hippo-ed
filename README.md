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
