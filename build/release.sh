git checkout master
git merge dev

#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # build
  npm version $VERSION --no-git-tag-version
  VERSION=$VERSION npm run build:lib

  # publish zanm-css
  echo "Releasing zanm-css $VERSION ..."
  cd packages/zanm-css
  npm version $VERSION
  npm publish
  cd ../..

  # commit
  git tag v$VERSION
  git commit -am "[release] $VERSION"

  # publish
  git push origin master
  git push origin refs/tags/v$VERSION
  git checkout dev
  git rebase master
  git push origin dev

  npm publish
fi
