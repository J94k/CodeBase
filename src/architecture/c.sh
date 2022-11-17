#!/bin/bash

echo "Enter the project name:"
read project_name

mkdir -p "./$project_name"
cd "./$project_name"

touch Makefile README.md LICENSE .gitignore .clang-format
echo "# $project_name" > README.md
mkdir docs bin build data include lib src tests
cd ..
