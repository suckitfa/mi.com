三个组件

- Square
- Board
- Game

> Squre中包含一个button
>
> Board包含9个Square

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |

React components can have state by setting `this.state` in their constructors. `this.state` should be considered as private to a React component that it’s defined in. Let’s store the current value of the Square in `this.state`, and change it when the Square is clicked.



### tic-tac-toe game 

- props 

- state



### why we need to lift up state

**o collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.**



将状态提升是一种很常见的重构手段

Lifting state into a parent component is common when React components are refactored — let’s take this opportunity to try it out.





Note

Unlike the array `push()` method you might be more familiar with, the `concat()` method doesn’t mutate the original array, so we prefer it.