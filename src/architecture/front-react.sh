#!/bin/bash

echo "Enter the absolute path for a root project directory:"
read rootPath

echo "Enter the number of project structure:"
echo "1. Basic"
echo "2. Advanced"
echo "4. Atomic"
echo "3. Feature-sliced"

# Basic

# src
#  - assets
#  - components
#  - pages
#  - constants
#  - helpers
#  - hooks
#  - store


# Advanced

# └── /src
#     ├── /assets
#     ├── /components
          # - forms
          #   - index.ts 
          #    - Withdraw
              #   - Select.tsx
              #   - Select.styles.tsx
              #   - Select.test.ts
#     ├── /services
        #  index.ts
        # /LocalStorage
        # │   ├── LocalStorage.service.ts
        # │   └── LocalStorage.test.ts
#     ├── /store
            # rootReducer.ts
            # index.ts
            # /authentication
            #  ├── /authentication.slice.ts
            #  ├── /authentication.actions.ts
            #  └── /authentication.test.ts
            #  /authors
            #  ├── /authors.slice.ts
            #  ├── /authors.actions.ts
            #  └── /authors.test.ts
#     ├── /utils
          # /constants
          #   └── countries.constants.ts
          # /helpers
          # ├── validation.helpers.ts
          # ├── currency.helpers.ts
          # └── array.helpers.ts
#     ├── /views
#     ├── index.ts
#     └── App.tsx
#     types/
      #  - index.ts


# Atomic

/src
 - components
  / 


# Feature-sliced

mkdir -p "$rootPath/JUST_A_TEST"

echo "Final config"
echo "Root: $rootPath"
echo "Structure: ?"
