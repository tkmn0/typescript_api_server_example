# base image
FROM node:12.6.0-alpine

# author
LABEL author="n0"
LABEL version="1.0.0"

# apk
RUN apk update

# vim
RUN apk add --no-cache mysql-client

# # copy project with excluding some files, see .dockerignore
ADD ./ /root/app/

# setup project 
WORKDIR /root/app/
RUN npm install
RUN npm run build