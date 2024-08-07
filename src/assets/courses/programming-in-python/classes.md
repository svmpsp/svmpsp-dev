## Lesson 5: Classes in Python

In the previous lessons, we have seen how to use functions and modules in Python. In this lesson, we will explore another important concept in Python programming: **classes**.

### What are Classes?

A class is a blueprint or a template that defines the characteristics of an object. It is essentially a way to group related variables (data) and methods (functions) together to create an instance of the class, which is called an **object**.

Think of classes as cookie cutters. Just like how you can use a cookie cutter to make multiple cookies with the same shape and characteristics, you can use a class to create multiple objects that have similar properties and behaviors.

### Defining a Class

To define a class in Python, you need to use the `class` keyword followed by the name of the class. The general syntax is:

```python
class ClassName:
    # definition of the class goes here
```

For example:

```python
class Dog:
    pass
```

The above code defines a class called `Dog`. The `pass` statement is just a placeholder and does not do anything.

### Attributes (Data) in a Class

Attributes, also known as data members, are variables that belong to the class. You can define attributes inside the class definition using the `self` keyword.

```python
class Dog:
    def __init__(self):
        self.name = ""
        self.age = 0
```

In this example, we have defined two attributes: `name` and `age`. The `__init__` method is a special method that gets called when an object of the class is created.

### Methods (Functions) in a Class

Methods are functions that belong to the class. You can define methods inside the class definition using the `self` keyword.

```python
class Dog:
    def __init__(self):
        self.name = ""
        self.age = 0

    def bark(self):
        print("Woof!")
```

In this example, we have defined a method called `bark`. The `bark` method prints "Woof!" to the console.

### Creating an Object from a Class

To create an object from a class, you need to use the `()` operator.

```python
my_dog = Dog()
```

This creates an object of type `Dog`.

### Accessing Attributes and Methods

You can access attributes and methods using dot notation.

```python
print(my_dog.name)  # prints ""
my_dog.bark()  # prints "Woof!"
```

Note that when you create a new object, the attributes are initialized with default values. You can change these values later.

### Conclusion

In this lesson, we have learned about classes in Python. We have seen how to define a class, define attributes and methods, and create an object from a class. Classes are essential for creating complex programs in Python, so make sure you understand the concept well.

**Exercise**

Create a `Person` class with attributes `name`, `age`, and `address`. Define a method called `greet` that prints a personalized greeting message. Create two objects of type `Person` and demonstrate how to access their attributes and methods.

I hope this helps! Let me know if you have any questions or need further clarification.
