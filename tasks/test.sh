#!/bin/env bash
sleep 2
cd spec && service-runner wsocket.spec.js &
TEST_PID=$!
sleep 2
kill $TEST_PID
