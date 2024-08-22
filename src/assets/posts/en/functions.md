In this lesson, we're going to explore one of the most powerful tools in Python programming: **functions**. A function is a block of code that can be executed multiple times from different parts of your program, allowing you to reuse code and make it more modular.

### Why Use Functions?

Think about a program where you want to do one task multiple times. For example:

```
print("Hello to my friend Paul!")
print("Its birthday is not today!")

print("Hello to my friend John!")
print("Its birthday is not today!")

print("Hello to my friend Ringo!")
print("Its birthday is today!")

print("Hello to my friend George!")
print("Its birthday is not today!")
```

Unfortunately, here we have typed a lot to accomplish very little. Functions can help us solve this problem by providing pieces of code that can be executed on demand with different parameters.

For the example above, we are basically saying hello to some of our friends.

Let's define a function to implement this task. In Python, you would do something like this:

```
def say_hello(friend_name: str, birthday: bool = False):
  print(f"Hello to my friend {friend_name}")
  if birthday:
    print("Its birthday is today!")
  else:
    print("Its birthday is not today!")
```

And we can use this function in the above program as:

```
say_hello("Paul")
say_hello("John")
say_hello("Ringo", True)
say_hello("George")
```

Before we dive into the details, let's take a step back and ask ourselves why we would want to use functions in the first place. Here are a few reasons:

- **Code Reuse**: By wrapping up some code in a function, you can reuse that code multiple times throughout your program without having to rewrite it.
- **Modularity**: Functions help keep your code organized by breaking it down into smaller, more manageable pieces.
- **Readability**: Functions make your code easier to read and understand because they group related code together.

### Defining a Function

In Python, you define a function using the `def` keyword followed by the name of the function. For example:

```python
def greet(name):
    print("Hello, " + name + "!")
```

This defines a function called `greet` that takes one argument, `name`. The function prints out a greeting message with the given name.

The interpreter does not check that `name` actually contains a name. In fact, it could contain a random number for all we know. This is one of the weaknesses of Python. It does not check the type of the variables until an error occurs.

To try to avoid these mistakes we can tell write what we expect the input types to be with type hints:

```python
def greet(name: str):
    print("Hello, " + name + "!")
```

This does not change the execution of the program, but can be used by people reading the code, and ourselves, to understand the code better.

### Calling a Function

To use a function, you call it by typing its name followed by parentheses containing any required arguments. For example:

```python
greet("John")  # Output: Hello, John!
```

In this example, we're calling the `greet` function and passing the string `"John"` as an argument.

### Functions with No Arguments

What if a function doesn't take any arguments? In that case, you can simply define it without parentheses:

```python
def hello():
    print("Hello!")
```

And then call it like this:

```python
hello()  # Output: Hello!
```

### Functions with Multiple Arguments

What if a function takes multiple arguments? You separate them with commas inside the parentheses. For example:

```python
def add(a, b):
    return a + b
```

This defines a function called `add` that takes two arguments, `a` and `b`. The function returns their sum.

### Returning Values from Functions

Functions can also return values to the code that calls them. This is useful when you want to use the result of a calculation or some other operation in your program. For example:

```python
def get_sum(a, b):
    return a + b
result = get_sum(2, 3)
print(result)  # Output: 5
```

In this example, we define a function called `get_sum` that takes two arguments and returns their sum. We then call the function with `a=2` and `b=3`, and store the result in the variable `result`. Finally, we print out the result.

### Conclusions

Functions are a powerful tool in Python programming that allow you to reuse code, keep your program organized, and make it more readable. In this lesson, we've learned how to define and call functions with different numbers of arguments, as well as return values from functions. Practice using functions in your own code to see the benefits they can bring!
