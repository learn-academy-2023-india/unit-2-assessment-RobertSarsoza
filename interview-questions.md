# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. Tip: providing an example can help communicate your point if you struggle with the vocabulary.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:RAS

1. What is the difference between a parameter and an argument?

Your answer:

A parameter is the item being used in the function. So in an arrow function about days of the week the parameters are from day to day. The argument is used to elaborate on the declaration of the variable so for example: const (favoriteHolidays) = Halloween.

Researched answer:

The paramter is a place holder of a value that is expected to be received by the function. 

The argument is what is in the actual function so in the function example- cont daysOff = weekendDays (day1, day2) are the parameters but later the argument makes it that day1 is saturday and day2 is sunday (saturday, sunday)

2. What is the difference between an object and a class?

Your answer:

An object what is contained inside a class. The way I understand it is a class is like a  branch off a tree and objects are the smaller branches that carry the leafs. An object can be called using dot notation. 

Researched answer:

A class is a template or blue print for objects, classes define the type of data and the method or behavior that the objects have. It uses one of the four pillars (encapsulation) to allow the organization/structuring of code. An object tells of the properties / behavior from the class that they are invoked from (objects arent called they are invoked using dot notation). Also the class is more of the trunk, the objects being the branches and their properties/ methods being the leaves. 

3. What is iteration?

Your answer:

iteration is the actionable part of a function. It turns defined variables into pieces that can be used to search or manipulate other data. 

Researched answer:

Iteration is the repeated execution of a block of code. It is repeated until a condition or criteria is met. Iteration is a fundemental part of programming that allows loops to process. It allows for tasks to be repeated without having to write code multiple times. 

4. STRETCH: What is hoisting in JavaScript?

Researched answer:

Hoisting is being able to use code before it has been declared because the variable and function declaration is moved to the top of their container during the phase in which the code in the scope is compiled. 

There are two types: 
1-Function Hoisting: 
    Which calls a function before the source code. 
2-Variable Hoisting:
    Which uses console.log and a place holder. then Var is used to declare the place holder and give it its value.
Additonal info: 
    ** Var is the keyword for variables.
    ** function is the keyword for function declarations.
    ** let and const arent applied in the same way and wont work for hoisting function expressions.
    **Using let like var will produce a undefined output.

## Looking Ahead: Terms for Next Unit

Research and define the following terms. Hint: use the syllabus!

1. React State:
 used to store and manage dynamic data that can change over time as a result of user interactions, external events, or other factors. When the state of a component changes, React re-renders the component to reflect the updated state. State is managed using the useState hook in functional components or the this.state and this.setState in class components.

2. React Props:
Short for properties, refers to the mechanism for passing data from a parent component to a child component. Props allow components to communicate and share information. They are passed as attributes to a component in JSX and are accessed within the component as properties of the props object. Props are immutable, meaning that a child component cannot modify the values it receives through props.
3. JSX:
JSX stands for JavaScript XML and is a syntax extension for JavaScript recommended by React for describing what the UserInterface should look like. It looks similar to HTML(or XML?) and allows programmers to write HTML-like code in JavaScript files. JSX is not a separate language but a syntactic extra that gets transpiled into regular JavaScript. It makes the creation of React elements more concise and readable.
