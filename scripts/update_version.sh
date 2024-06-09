#!/bin/bash

# Array of relative file paths
file_paths=(
  "package.json"
  "src/static/manifest.json"
)

# Define the new version
new_version="\"version\": \"$1\""

# Get the current working directory
current_dir="$(pwd)"

# Iterate over the file paths and edit each file
for file_path in "${file_paths[@]}"; do
  full_path="${current_dir}/${file_path}"
  echo $full_path
  sed -E -i '' "s/\"version\": \"[0-9]\.[0-9]+\.[0-9]+\"/${new_version}/" "${full_path}"
done
