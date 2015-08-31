#!/bin/env bash
sleep 2
cd test && ../node_modules/.bin/service-runner wsocket.test.integration.js &
TEST_PID=$!
sleep 2
kill $TEST_PID
