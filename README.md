for more information  
https://www.theodinproject.com/lessons/javascript-webpack  
https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page  
https://www.theodinproject.com/lessons/node-path-javascript-revisiting-webpack  

/* no need to initialize with this template, but FYI  */  
/* init npm to create package.json */  

npm --init  
npm install --save-dev webpack webpack-cli  
npx webpack  
  
/* for this template */  
/* install packages */  
npm install -D  

/* to start dev server */  
npm run start  

/* to build dist directory */  
npm run build  

/* to deploy */  
/* create a deployment github branch 1 time per project*/  
git branch gh-pages  

/* deployment routine */  
git status  
git checkout gh-pages && git merge main --no-edit  
npm run build  
git add dist -f && git commit -m "Deployment commit"  
git subtree push --prefix dist origin gh-pages  
git checkout main  

