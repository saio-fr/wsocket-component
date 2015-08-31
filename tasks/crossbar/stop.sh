#!/bin/env bash

docker stop c-wsocket-crossbar || echo 'you cannot user docker stop in that environment'
docker rm c-wsocket-crossbar || echo 'you cannot user docker rm in that environment'
docker rmi c-wsocket-crossbar || echo 'you cannot user docker rmi in that environment'
