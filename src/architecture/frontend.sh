#!/bin/bash

echo "Enter the project name:"
read project_name

mkdir -p "./$project_name"
cd "./$project_name"

touch README.md LICENSE .gitignore .nvmrc .eslintrc .prettierrc .prettierignore package.json
echo "# $project_name" > README.md
mkdir docs src tests
cd src
mkdir app config pages shared widgets features
cd shared
mkdir utils lib style components
cd ../../..
