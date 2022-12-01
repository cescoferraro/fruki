FROM node:18
WORKDIR /app
COPY .npmrc /app/.npmrc
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm i

COPY api.ts /app/api.ts
EXPOSE 3333
CMD npm run api