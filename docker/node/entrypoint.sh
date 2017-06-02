#!/usr/bin/env bash

set -e

if [ "$1" = "npm" ]; then
    yarn
fi

exec "$@"
