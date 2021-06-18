# Console Controller
Disable / Enable the window console.

### Usage

```javascript
ConsoleController.enable();
ConsoleController.disable();
```

### Example

```javascript
console.log('Foo'); // Prints 'Foo'
ConsoleController.disable();
console.log('Foo'); // Doesn't print anything
ConsoleController.enable();
console.log('Foo'); // Prints 'Foo'
```
