# Learning how to configure a full-stack application

Based on [Docker Tutorial for Beginners | Dockerize Any App in 2024](https://youtu.be/GFgJkfScVNU?si=pYv7Z3oUWINsF8r3).

## Run the Application

Run the following command in the terminal;

~~~docker
$ docker compose up
~~~

Then in the upper right corner of the terminal to the left of the trash icon click on `Split Terminal` or use the shortcut keys `(Ctrl+Shift+5)`; <br><br>
In the new terminal run the command below;

~~~javascript
$ docker compose watch
~~~
That's it for now.

tx@tx:~/Dev/full-stack-docker$ docker compose up
[+] Running 2/1
 ✔ Container db-container   Recreated                                                                                                                        0.1s
 ✔ Container api-container  Recreated                                                                                                                        0.0s
Attaching to api-container, db-container
db-container   |
db-container   | PostgreSQL Database directory appears to contain a database; Skipping initialization
db-container   |
db-container   | 2024-02-13 04:34:09.851 UTC [1] LOG:  starting PostgreSQL 16.2 (Debian 16.2-1.pgdg120+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
db-container   | 2024-02-13 04:34:09.852 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db-container   | 2024-02-13 04:34:09.852 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db-container   | 2024-02-13 04:34:09.859 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db-container   | 2024-02-13 04:34:09.869 UTC [30] LOG:  database system was shut down at 2024-02-13 04:33:51 UTC
db-container   | 2024-02-13 04:34:09.879 UTC [1] LOG:  database system is ready to accept connections
api-container  | yarn run v1.22.19
api-container  | $ nodemon src/index.js
api-container  | [nodemon] 3.0.3
api-container  | [nodemon] to restart at any time, enter `rs`
api-container  | [nodemon] watching path(s): *.*
api-container  | [nodemon] watching extensions: js,mjs,cjs,json
api-container  | [nodemon] starting `node src/index.js`
db-container   | 2024-02-13 04:35:36.001 UTC [43] FATAL:  database "root" does not exist
db-container   | 2024-02-13 04:36:58.811 UTC [34] ERROR:  relation "contacts" does not exist at character 15
db-container   | 2024-02-13 04:36:58.811 UTC [34] STATEMENT:  SELECT * FROM contacts
api-container  | /app/node_modules/pg/lib/client.js:526
api-container  |           Error.captureStackTrace(err);
api-container  |                 ^
api-container  |
api-container  | error: relation "contacts" does not exist
api-container  |     at /app/node_modules/pg/lib/client.js:526:17
api-container  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
api-container  |     at async exports.query (/app/src/database/index.js:14:20)
api-container  |     at async ContactsRepository.findAll (/app/src/app/repositories/ContactsRepository.js:24:18)
api-container  |     at async index (/app/src/app/controllers/ContactController.js:5:22) {
api-container  |   length: 107,
api-container  |   severity: 'ERROR',
api-container  |   code: '42P01',
api-container  |   detail: undefined,
api-container  |   hint: undefined,
api-container  |   position: '15',
api-container  |   internalPosition: undefined,
api-container  |   internalQuery: undefined,
api-container  |   where: undefined,
api-container  |   schema: undefined,
api-container  |   table: undefined,
api-container  |   column: undefined,
api-container  |   dataType: undefined,
api-container  |   constraint: undefined,
api-container  |   file: 'parse_relation.c',
api-container  |   line: '1449',
api-container  |   routine: 'parserOpenTable'
api-container  | }
api-container  |
api-container  | Node.js v20.11.0
db-container   | 2024-02-13 04:36:58.823 UTC [34] LOG:  could not receive data from client: Connection reset by peer
api-container  | [nodemon] app crashed - waiting for file changes before starting...
db-container   | 2024-02-13 04:39:09.963 UTC [28] LOG:  checkpoint starting: time
db-container   | 2024-02-13 04:39:09.984 UTC [28] LOG:  checkpoint complete: wrote 3 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.005 s, sync=0.002 s, total=0.021 s; sync files=2, longest=0.001 s, average=0.001 s; distance=0 kB, estimate=0 kB; lsn=0/19138A8, redo lsn=0/1913870
