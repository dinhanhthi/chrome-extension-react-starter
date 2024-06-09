#!/bin/bash
version=$(awk -F'"' '/"version": ".+"/{ print $4; exit; }' package.json)
echo "👉 Building production version v$version"
yarn build:prod
mkdir -p prod-packages
echo "📦 Zipping package to prod-packages/dist-v$version.zip"
cd dist-prod
zip -r ../prod-packages/dist-v$version.zip * -x "*.DS_Store"
cd -1
echo "🎉 Done 👉 The package is in prod-packages/dist-v$version.zip"
