# Remix User Authentication Example

This example code is copy of this article - <https://blog.logrocket.com/handling-user-authentication-remix/>

- [Remix Docs](https://remix.run/docs)

## To Start

To Start, you need to exec bellow

```sh
npm
npx tailwindcss init -p
npx prisma init --datasource-provider sqlite
npx prisma db push
npx prisma db seed
npm dev
```

To Init this kind of project, exec bellow

```sh
npx create-remix@latest remix-quote-wall
> Just the basics
> Remix App Server
> TypeScript
cd remix-quote-wall

npm install -D tailwindcss postcss autoprefixer concurrently
npx tailwindcss init -p

npm install --save-dev prisma //prisma for dev
npm install @prisma/client    //prisma for production
npx prisma init --datasource-provider sqlite  //need to set value 'DATABASE_URL="file:./dev.db"' in .env
```

when update db schema by prisma.schema, you should execute bellow

```sh
npx prisma db push
```

when update seed script for initial db data, you should execute bellow

```sh
npx prisma db seed
```

For execute this project as Dev,

```sh
npm install
npm run dev
```

And for build and run this project,

```sh
npm install
npm run build

npm start
```
