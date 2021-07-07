# Waiting-js

Very useful for timing code, or waiting.    
First package made by Veqsa

## Installation

How to install the waiting package using npm

```bash
npm install waiting
```

## Usage

How to use the waiting package

```javascript
const waiting = require('waiting-js')
```
```javascript
sleep({
    time: 2, // Amount of time the code should wait
    time_format: 'seconds' // Format of the time
})
```

### time_format
*  **Hours** - _'hours', 'h'_
* **Minutes** - _'minutes', 'min', 'm'_
* **Seconds** - _'seconds', 'sec', 's'_