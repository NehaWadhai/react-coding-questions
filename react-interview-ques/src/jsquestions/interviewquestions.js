//Can you find is there any security issue in javascript code? const data = await fetch("api") const div = document.getElementById("todo") div.innerHTML = data So in that I need to find what is that how can resolve it. 2. they gave an image url and I need to make same ui as it is. there were 6 points there I need to fulfil those. a. one title heading that need to align in center with bold b. there were one image that should be on left side with covering 30% width of viewport. c. on right side one paragraph there that should cover remaining view port as 30% covering by image. d. one metadata - "Published - 2023" that was at right end. 3. Given an API returning a list of todos, we want to fetch the list, create a separate block for each user, and display their todos in the appropriate block. Use this endpoint URL to get the todos: https://dummyjson.com/todos?limit=10&skip=80. It will return the following structure with total of 10 todos: { "todos": [ { "id": 1, "todo": "Do something nice for someone I care about", "completed": true, "userId": 26 }, ], } Each block should contain the userId as the title of the block and the list of todos.

//https://medium.com/@singht216/atlassian-interview-experience-frontend-software-engineer-8f69f3c5c8ea -- link for reference

//Can you find is there any security issue in the javascript code? 
const data = await fetch("jttp") 
const div = document.getElementById('todo') 
div.innerHTML = data //So I need to find what is and how can resolve i

//Solution
div.textContent = data //Using textContent instead of innerHTML to prevent XSS attacks
