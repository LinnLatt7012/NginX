FROM node:12
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install
CMD npm run app
EXPOSE 9999
#docker run -p 2222:9999 -e APPID=2222 -d node-app