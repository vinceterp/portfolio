FROM node:21-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]