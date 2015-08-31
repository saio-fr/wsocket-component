[![Circle CI](https://circleci.com/gh/saio-fr/wsocket-component.svg?style=svg)](https://circleci.com/gh/saio-fr/wsocket-component)

wsocket-component
=========
wsocket-component is a ms-saio component integration for lib-wsocket.  
wsocket-component extends wsocket-lib so :
* it has the same methods (+ start/stop, which just call open/close),
* the same attributes and
* emits the same events !

Options :
---------
* url : default to 'ws://localhost:80/'
* realm : default to 'realm'
* authID : default to `undefined`
* password : default to `undefined`

Test :
------
To run the test you need to have Docker installed.
```bash
    # if you use the saio private registry :
    $ npm set registry <saio npm address>
    # if not, just set NODE_ENV to dev
    $ export NODE_ENV=dev

    $ npm install
    $ npm test
        # stdout if everything goes well :)
    # some Docker stuff... then the interesting part:
    What is the answer to the Great Question of Life,
    the Universe and Everything ?
    42
    # and again some Docker stuff
```
