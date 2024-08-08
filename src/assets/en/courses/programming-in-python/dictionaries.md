## Lesson 5: Introduction to Dictionaries in Python

In the previous lessons, we've learned how to work with lists and strings in Python. In this lesson, we'll introduce you to another fundamental data structure called dictionaries.

### What is a Dictionary?

A dictionary (also known as a hash or associative array) is a data structure that stores key-value pairs. In other words, it's a collection of unique keys mapped to their corresponding values. This allows you to quickly look up and retrieve specific values based on their associated keys.

Think of a dictionary like a phonebook: each person has a unique name (key), and their contact information (value) is stored alongside that name. You can easily find someone's contact info by looking up their name in the book.

### Creating a Dictionary

In Python, you create a dictionary using curly braces `{}` and separating key-value pairs with commas. Here's an example:

```python
person = {"name": "John", "age": 30, "city": "New York"}
```

This dictionary has three key-value pairs:

- `"name"` is the key, and `"John"` is its associated value.
- `"age"` is another key, and `30` is its value.
- `"city"` is the third key, and `"New York"` is its value.

### Accessing Dictionary Values

You can access a dictionary's values using the key. For example:

```python
print(person["name"])  # Output: "John"
```

If you try to access a non-existent key, Python will raise a `KeyError` exception. To avoid this, you can use the `.get()` method to provide a default value if the key is not found:

```python
print(person.get("job", "Unknown"))  # Output: "Unknown"
```

### Updating and Adding Dictionary Values

You can update or add new key-value pairs using assignment syntax:

```python
person["phone"] = "123-4567"
person["country"] = "USA"

print(person)  # Output: {"name": "John", "age": 30, "city": "New York", "phone": "123-4567", "country": "USA"}
```

### Iteration and Dictionary Methods

You can iterate over a dictionary's key-value pairs using the `.items()`, `.keys()`, or `.values()` methods. For example:

```python
for key, value in person.items():
    print(f"{key}: {value}")
```

This will output each key-value pair on a separate line.

### Key Takeaways

- A dictionary is a data structure that stores key-value pairs.
- You create a dictionary using curly braces and separating key-value pairs with commas.
- You access a dictionary's values using the key.
- You can update or add new key-value pairs using assignment syntax.
- Dictionaries provide various methods for iteration, such as `.items()`, `.keys()`, and `.values()`.

### Exercises

1. Create a dictionary called `car` with the following key-value pairs: `"make"`: "Toyota", `"model"`: "Camry", `"year"`: 2015.
2. Access the value associated with the key `"make"` in the `car` dictionary.
3. Add a new key-value pair to the `car` dictionary called `"color"`: "Silver".
4. Iterate over the key-value pairs in the `car` dictionary using the `.items()` method.

### Conclusions

In this lesson, you learned how to work with dictionaries in Python. Dictionaries are useful for storing and retrieving data efficiently, especially when dealing with unique identifiers or labels. Remember to use curly braces to create a dictionary, separate key-value pairs with commas, and access values using keys. Practice creating, updating, and iterating over dictionaries to become more comfortable working with this fundamental data structure in Python!
