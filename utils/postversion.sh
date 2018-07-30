#!/bin/bash

git checkout -b $npm_package_version
git add package.json package-lock.json
git commit -m "chore(version): bump to v$npm_package_version"
git push --no-verify origin $npm_package_version
git checkout master

echo
echo
echo "Version $npm_package_version"
echo
echo "Done! Please create a PR to merge the branch v$npm_package_version to master:"
echo "https://github.com/blockchain/blockchain-info-components/compare/master...$npm_package_version"
