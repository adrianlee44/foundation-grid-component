#!/bin/sh

# move into foundation repo
cd temp
# pull all the latest commits
git checkout -f master && git pull
# get the latest tag
FOUNDATION_TAG=$(git describe --tags `git rev-list --tags --max-count=1`)
git checkout $FOUNDATION_TAG

cd ../
TAG=$(git describe --tags `git rev-list --tags --max-count=1`)

if [ $FOUNDATION_TAG != $TAG ]
  then
    TAG_NUMBER="${FOUNDATION_TAG#v}"
    git checkout --orphan $FOUNDATION_TAG
    git reset
    grunt
    grunt bump-only --setversion=$TAG_NUMBER
    git add LICENSE.md README.md bower.json grid.css grid.css.map package.json

    git commit -m "Build $FOUNDATION_TAG"
    git tag -a $FOUNDATION_TAG -m "Version $TAG_NUMBER"

    git push origin $FOUNDATION_TAG
    git push --tags
fi
