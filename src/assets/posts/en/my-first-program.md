In this post we we'll learn how to write and execute our first Python program!

Do not worry if you don't understand everything right away. This post is intended as a quick check that everything works before diving deeper into learning the python language.

### Writing a Python source file

Open a new file in your favourite editor an copy/paste the following contents into it:

```python

def main():
    print("Hello, this is my first program!")

if __name__ == "__main__":
    main()
```

Save the file as `my_first_program.py`.

The `.py` file extension is used to
denote Python source files.

### Executing a Python file

To execute a Python program, we simply use the `python` interpreter with the file name as first argument:

```bash
$ python my_first_program.py

Hello, this is my first program!
```

This **command** tells the Python interpreter (`python`) to read the contents of our file (`my_first_program.py`), and to execute the **instructions** found in the file.

The only instruction we put there was:

```
print("Hello, this is my first program!")
```

which tells the interpreter to print that sentence. And that's exactly what the interpreter did.

### Conclusions

Congratulations! You have successfully written and executed a Python program.

If you don't understand exactly how that was possible do not worry. We'll discuss all the details in the following posts.
