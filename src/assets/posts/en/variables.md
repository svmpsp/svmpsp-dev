In this lesson, we will introduce you to one of the fundamental concepts in programming: variables. A variable is a name given to a value that can change during the execution of your program.

Variable are used to give a name to data we manipulate so that we can refer to it later. Each variable is defined by a name and a value.

For example:

```
a = 3         # Define variable 'a' with value 3
b = 5         # Define variable 'b' with value 5
sum = a + b   # Define variable 'sum' with value 'a + b', or 8
```

Think of a variable like a labeled box where you can store a value. You can then use the label (the variable's name) to access the value stored in the box. Variables allow you to store and reuse values in your program, making it easier to write efficient and effective code.

### Declaring Variables

In Python, you declare a variable by assigning a value to it using the assignment operator (=). For example:

```
x = 5
```

Here, we are declaring a variable `x` and assigning it the value `5`. The equal sign (=) is used to assign a value to a variable.

### Types of Variables

In Python, you can declare variables of different types:

- **Integers**: Whole numbers, like `1`, `2`, or `3`.
- **Floats**: Decimal numbers, like `3.14` or `-0.5`.
- **Strings**: Text values, like `"hello"` or `'goodbye'`. Strings are surrounded by quotes (either single quotes or double quotes).
- **Boolean**: A value that can be either `True` or `False`.

### Assigning Values to Variables

You can assign a new value to an existing variable using the assignment operator (=). For example:

```
x = 5
x = x + 1
print(x)  # Output: 6
```

Here, we are assigning the value `5` to `x`, then updating the value of `x` by adding `1` to it. Finally, we print the new value of `x`.

### Variable Naming Rules

When choosing a name for your variable, follow these rules:

- **BE DESCRIPTIVE!** Always choose a name that indicates what the variable is used for. For example, if a variable represents the age of a person, don't call it `number`, call it `person_age`.
- Use only letters (a-z or A-Z), numbers (0-9), and underscores (\_).
- Don't use spaces or special characters.

To understand why this is important try reading the following equivalent code snippets:

```
# BAD EXAMPLE

x = 1000.0
y = 125.0
z = x - y


# GOOD EXAMPLE

account_balance = 1000.0
item_cost = 125.0
updated_balance = account_balance - item_cost

```

The second example is much easier to read and understand!

### Conclusions

In this lesson, you learned how to declare and use variables in Python. Variables are essential for storing and reusing values in your programs. Remember to follow the variable naming rules to always write programs that are easy to read and understand.
