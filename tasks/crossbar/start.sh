#!/bin/env bash

docker build -t c-wsocket-crossbar tasks/crossbar/
docker run -d \
	--name c-wsocket-crossbar \
	-p 8041:8041 \
	-p 8042:8042 \
	c-wsocket-crossbar
