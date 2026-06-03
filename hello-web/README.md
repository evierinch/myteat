# hello-web

my docker learning project

## what is this

i am learning docker and this is my practice repo. there are some apps inside the folders

## folders

- python-app - a python hello world
- node-app - a node api thing  
- go-app - go is fast

## docker images

i pushed these to github packages!! you can pull them directly

- python app: `ghcr.io/evierinch/python-hello:latest`
- node app: `ghcr.io/evierinch/node-api:latest`
- go app: `ghcr.io/evierinch/go-cool:latest`

to run:
```
docker pull ghcr.io/evierinch/python-hello:latest
docker run -p 10000:10000 ghcr.io/evierinch/python-hello:latest
```

## how to use

go into the folder and build the docker image i guess

```
cd python-app
docker build -t myapp .
docker run -p 10000:10000 myapp
```

## why docker

my teacher said docker is important for devops so im learning it. i still dont really understand containers vs vms but whatever

## status

still learning... will add more stuff later maybe

## notes to self

- remember to commit often
- dont forget to push
- need to learn docker-compose next

---
last updated: whenever i pushed this
