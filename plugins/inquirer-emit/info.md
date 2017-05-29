# Plugin inquirer-emit

This plugin helps to emit parameters just defining the inquire in your step configuration.

1. [check() hook](#check)
1. [inquirerEmit() addon](#emit)

## Using this plugin

1. **Add dependency to package.json of your recipe**

```sh
npm install pisco-plugin-inquirer-emit --save
```

2. **Add the plugin in your step**

`recipe/steps/step-name/config.json`:

```json
"plugins": [ "inquirer-emit" ]
```

3. **Define a paramater called `emitPrompts` in your step**

Example `recipe/steps/step-name/config.json`:

```json
"emitPrompts": [ {
  "name": "param1",
  "type": "list",
  "message": "Choose one value",
  "choices": [
    "value1",
    "value2"
  ]
}, {
  "name": "param2",
  "type": "input"
} ]
```

4. **Emit on your step the result of this.inquirerEmit()**

Example `recipe/steps/step-name/index.js`:

```javascript
module.exports = {
  emit() {
    return this.inquirerEmit();
  }
};
```

## <a name="check"></a>check() hook

When a "emitPrompts" configuration has been defined, then inquire parameters.

Example:

```json
"emitPrompts": [ {
  "name": "param1",
  "type": "list",
  "message": "Choose one value",
  "choices": [
    "value1",
    "value2"
  ]
}, {
  "name": "param2",
  "type": "input"
} ]
```

This shows a message like this.

```sh
Inquiring 'emitPrompts' configuration...
```

## <a name="emit"></a>inquirerEmit() addon

Return an object with all inquired parameters to rest of the flow. Parameters are going to be availables on this.params.

Example:

```json
"emitPrompts": [ {
  "name": "param1",
  "type": "list",
  "message": "Choose one value",
  "choices": [
    "value1",
    "value2"
  ]
}, {
  "name": "param2",
  "type": "input"
} ]
```

This will return an object with the two paramaters `param1` and `param2`.

