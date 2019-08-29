# Easy Exercises

Probably most of the *Warm Up* exercises are finished if you have managed to get this far.

Have you noticed that it is pretty cumbersome to check output all the time? If the same approach would be used in the real life development speed would suffer.

There is a better way - tests!

 > There is no one who should write tests for your code!!! Your code - your responsibility!

But only this time - tests are written by us, using very popular library - [Jest](https://jestjs.io).

Your goal for this part is to have all of the tests green.

## Getting Ready

As before, open this folder in the Visual Studio Code and download all the dependencies by executing `npm install`

## Executing Tests

In the `src` directory are multiple directories. Each of them contains two files, one has the code inside, which you are going to modify and the second one is test which you are not allowed to modify.

Start in the ascending order, by looking at the **code and test** (it is very important to read the test also) try to figure out what you need to do.

Execute all tests with command `npm test`

!["Run Tests"](./assets/run-tests.gif)

You will see that there are lot of tests being run and most of them are failing (red).

After the run process stays running and presents you few options, we are going to choose `o` to run only the tests related to changed files.

!["Watch Changed Files"](./assets/watch-changed-files.gif)

Now when you change any file, tests related to that file will be run (if you have autosave enabled).

!["Running Tests on Change"](./assets/running-tests-on-change.gif)

If you want to exit from that process press `ctrl + c`.