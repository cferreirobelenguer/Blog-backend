
# BLOG CRUD BACKEND✨
![image](https://user-images.githubusercontent.com/88061350/180025774-1b0cb7fa-a50b-4e6a-acbd-80f9f5394c66.png)

Backend proyect with nodejs, nodejs Express and json database

## Installation 🔧

npm init (create the proyect)
![image](https://user-images.githubusercontent.com/88061350/180027373-53fa5b87-44e7-4981-b62b-233282004f21.png)

npm i express (framework to https)
npm i body-parser (request to json)
npm i dotenv (environment variables)
npm i nodemon --save -dev (only for local, we need to refresh the server automatically)


## Tree proyect 🗃️

![image](https://user-images.githubusercontent.com/88061350/180025004-b2c20f63-d1c7-4640-9a4e-d6671ad64c18.png)

nodemon index.js

node index.js

## Deploy backend with heroku CLI 🚀

$ heroku login
$ cd backend_Next
$ git init
$ git add .
$ git commit -m "description"
$ heroku git:remote -a blog-dog
$ git push heroku main
