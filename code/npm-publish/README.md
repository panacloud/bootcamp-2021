# Step 1: Publish Scoped Public Local Packages

https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

npm adduser

npm publish --access public


# Step 2: Publish Public Global Packages

https://medium.com/jspoint/creating-cli-executable-global-npm-module-5ef734febe32


npm i -save-dev @types/node

npm i @panacloud/greeting-project -g

greet --name zia

Output:

Hello from Pakistan
[ '/usr/local/bin/node', '/usr/local/bin/greet', '--name', 'zia' ]
[ '--name', 'zia' ]

