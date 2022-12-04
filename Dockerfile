FROM node:18
WORKDIR /app
COPY .npmrc /app/.npmrc
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm i

COPY codegen.ts /app/codegen.ts
COPY server.schema.graphql /app/server.schema.graphql

COPY server/app.tsx /app/server/app.tsx
COPY server/api.tsx /app/server/api.tsx
COPY server/bundle.tsx /app/server/bundle.tsx
COPY server/tsconfig.json /app/server/tsconfig.json
COPY server/webpack.config.js /app/server/webpack.config.js

RUN npm run codegen
RUN npm run client

CMD npm run api