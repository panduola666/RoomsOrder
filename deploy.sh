    #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run build

    # navigate into the build output directory
    cd dist

    # place .nojekyll to bypass Jekyll processing
    echo > .nojekyll

    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME

    git init
    git checkout -B main
    git add -A
    git commit -m 'Update'

    # if you are deploying to https://RayChen1996.github.io
    # git push -f git@github.com:RayChen1996/RayChen1996.github.io.git main

    # if you are deploying to hhttps://github.com/RayChen1996/RoomsOrder
     git push -f https://github.com/RayChen1996/RoomsOrder.git main:gh-pages

    cd -