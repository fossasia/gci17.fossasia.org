#!/usr/bin/env bash
set -e

# Doing jobs according to COMPONENT's value to minimize build times

if [ "$JOB" == "BUILD" ]; then
    bundle exec jekyll build
elif [ "$JOB" == "TEST" ]; then
    bundle exec img_checker
fi

exit 0
