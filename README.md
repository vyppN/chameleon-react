# @vyppn/chameleon-react

> Get dominant colors from image for your react application

[![NPM](https://img.shields.io/npm/v/@vyppn/chameleon.svg)](https://www.npmjs.com/package/@vyppn/chameleon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# What is it made for?

Get dominant colors from image for your react application<br/>
<b>React Native and Expo compatible</b>


# Example

Check how does it in [Live Demo](http://vyppn-chameleon.surge.sh)

## Install

```bash
npm install --save @vyppn/chameleon-react
```

or

```bash
yarn add @vyppn/chameleon-react
```

## Usage

The <b>result</b> will give the list of 5 dominant Hex colors.


```tsx
import React from 'react'

import Chameleon from '@vyppn/chameleon-react'

export default () => {

  // Usage
  const {result,error} = await Chameleon(imageURL)
  
  return (
    <MyComponent />
  )
}
```

## License

MIT © [vyppN](https://github.com/vyppN)
