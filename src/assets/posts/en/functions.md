## Lesson 6: Functions in Python

In this lesson, we're going to explore one of the most powerful tools in Python programming: **functions**. A function is a block of code that can be executed multiple times from different parts of your program, allowing you to reuse code and make it more modular.

### Why Use Functions?

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

### Conclusion

Functions are a powerful tool in Python programming that allow you to reuse code, keep your program organized, and make it more readable. In this lesson, we've learned how to define and call functions with different numbers of arguments, as well as return values from functions. Practice using functions in your own code to see the benefits they can bring!

**Exercise**

Write a function called `count_vowels` that takes a string as an argument and returns the number of vowels (A, E, I, O, U) in the string.

**Solution**

```python
def count_vowels(s):
    vowels = "AEIOU"
    count = 0
    for char in s:
        if char.upper() in vowels:
            count += 1
    return count

print(count_vowels("hello"))  # Output: 2
```

I hope this helps! Let me know if you have any questions.
