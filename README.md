# react-face-pile
A group of overlapping round avatars are called face piles


## Install

```bash
npm install react-face-pile
```

## Example

```js
import {FacePile} from 'react-face-pile';

import React, {Component} from 'react';


export default class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [
            {
            name: "Dmitry Kalinin",
            avatar: null
          },
          {
            name: "Ivan Ivanov",
            avatar: null
          }, 
          {
            name: "Ivan Kalinin",
            avatar: "https://picsum.photos/id/1052/50/50" 
          }, 
          ]
        };
    }

    render() {
        return (
          <FacePile size={24} users={this.state.users} />
        );
    }
}

```


## License
MIT

## Donation Button

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YYZQ6ZRZ3EW5C)
