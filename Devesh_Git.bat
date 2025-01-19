git config --global user.name "deveshpingle"
git config --global user.email "devesh.pingle1234@gmail.com" 
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/deveshpingle/ReactNodeJs.git
git remote set-url origin https://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@github.com/deveshpingle/ReactNodeJs.git
git fetch --all
git checkout -b "dev/ReactNodeJs_New"
git push origin dev/ReactNodeJs_New