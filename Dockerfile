FROM oven/bun:1.0 as build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

FROM oven/bun:1.0 AS production
WORKDIR /app
COPY --from=build /app/build .
RUN bun install dotenv easy-reactive
EXPOSE 3000
CMD ["bun", "-r", "dotenv/config", "index.js"]
