
# Nextjs REST API

REST API built with Next.js using Prisma

## Powered by

- [Next.js](https://nextjs.org): Node.js React framwork

- [Docker](https://www.docker.com): Container managment

- [PostgreSQL](https://www.postgresql.org): Database

- [PgAdmin](https://www.pgadmin.org): Postgres management GUI

- [Prisma](https://www.prisma.io): Allows Next.js to communicate with PostgreSQL
 
## Usage

PostgreSQL and PgAdmin must be run before the project can start

#### Create PostgreSQL container
```
docker run --name pg-database -p 5432:5432 -e POSTGRES_PASSWORD=admin -d postgres
```

####  Create PgAdmin container
```
docker run --name pg-admin -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=root@example.com -e PGADMIN_DEFAULT_PASSWORD=root -d dpage/pgadmin4
```

Navigate to localhost:5050 and login with email `root@example.com` and password `root`

Once logged in:
- Click 'Add new server'
- Name it ‘pg-database’
- Click “Connection”
- Put `host.docker.internal` as the host name, `5432` as the port, `postgres` as the username, and `admin` as the password

You should see your database pop up as 'pg-database'

Currently there is no Docker support for Prisma, so this project must be run natively

#### Connct prisma to PostgreSQL
```
npx prisma db push
```

The table should now be visible at `pg-database` > `Schmeas` > `Tables`

To see what else you can do with PgAdmin, vist the [docs](https://www.pgadmin.org/docs/pgadmin4/latest/index.html)
#### Run the Next.js app
```
npm run dev
```

You can now access the api at `localhost:3000`
## API Reference


### GET endpoints

#### Shows all endpoints

```
GET /api/
```

#### Creates a base user and deletes all users created
```
GET /api/reset
```

#### Get specific user data by id

```
GET /api/users/${id}
```

#### Get all users' data

```
GET /api/users/
```

#### Get user data by id

```
GET /api/users/${id}
```

#### Delete user by id

```
GET /api/deleteUser/${id}
```


### POST endpoints

#### Adds user based on request body

```
POST /api/addUser
```

| Body | Type |
| :-------- | :------- |
| `name`      | `String` |
| `email`      | `String` |


### PUT endpoints

#### Updates a users details by id

```
PUT /api/updateUser/${id}
```
| Body | Type |
| :-------- | :------- |
| `name`      | `String?` |
| `email`      | `String?` |
