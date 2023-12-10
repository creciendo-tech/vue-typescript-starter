FROM node

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev", "--host"]
# CMD ["npm","run", "dev", "--host"]
