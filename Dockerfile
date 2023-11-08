FROM node:alpine

WORKDIR /usr/src/facerecognitionbrain-api

COPY ./ ./

RUN npm install

CMD ["sh"]