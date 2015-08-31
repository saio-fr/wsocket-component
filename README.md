[![Circle CI](https://circleci.com/gh/saio-fr/wsocket-component.svg?style=svg)](https://circleci.com/gh/saio-fr/wsocket-component)

wsocket-component
=========
wsocket-component is a ms-saio component integration for wsocket-lib.  
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
To run the test locally you need to have Docker installed.
```bash
    # unit test
    $ npm login
    $ npm install
    $ npm test
    # integration tst
    $ bash ./tasks/crossbar/start.sh
    $ bash ./tasks/test.sh

        # stdout if everything goes well :)
        # some Docker stuff... then the interesting part:
        What is the answer to the Great Question of Life,
        the Universe and Everything ?
        42

    $  bash ./tasks/crossbar/stop.sh
    # and again some Docker stuff
```
