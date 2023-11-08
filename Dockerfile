FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

COPY . .

RUN yarn

RUN yarn build

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "start"]
