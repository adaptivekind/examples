FROM node:22.6.0 AS build
WORKDIR /app
COPY index.js .
COPY instrumentation.js .
COPY package.json .
COPY package-lock.json .
RUN npm install --omit=dev

FROM gcr.io/distroless/nodejs22-debian12
COPY --from=build /app /app
WORKDIR /app
EXPOSE 3000
ENV NODE_OPTIONS="--require ./instrumentation.js"
CMD [ "index.js" ]

