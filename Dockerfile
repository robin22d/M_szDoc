FROM node:8-alpine
COPY . /mDocs
WORKDIR /mDocs
CMD [ "npm", "run", "build" ]