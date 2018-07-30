#!/bin/bash
set -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$BRANCH" != "master" ]]; then
  echo 'Please run npm version on master'
  exit 1
fi

if [[ `git status --porcelain` ]]; then
  echo "Git working directory is not clean"
  exit 1
fi

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
  npm config set git-tag-version=false
elif [ $LOCAL = $BASE ]; then
  echo "Git working directory is not clean: need to pull"
  exit 1
elif [ $REMOTE = $BASE ]; then
  echo "Git working directory is not clean: need to push"
  exit 1
else
  echo "Git working directory is not clean: diverged"
  exit 1
fi
