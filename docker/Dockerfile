FROM node:12
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install
CMD npm run app
EXPOSE 9999
#docker run -p 2222:9999 -e APPID=2222 -d node-app-image
#docker run -p 3333:9999 -e APPID=3333 -d node-app-image
#docker run -p 4444:9999 -e APPID=4444 -d node-app-image
#docker run -p 5555:9999 -e APPID=5555 -d node-app-image