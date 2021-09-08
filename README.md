# Intro

Entity `Books` with unique key `title`.

Action `addBooks` with input many books, insert all of them

File `test.http` with 3 steps

# Version:
`cds -v`

```
@sap/cds: 5.1.4
@sap/cds-compiler: 2.2.6
@sap/cds-dk: 4.1.4
@sap/cds-foss: 2.3.1
@sap/cds-runtime: 3.1.0
Node.js: v14.17.0
```

`npm ls`
```
├── @sap/cds@5.4.3
├── express@4.17.1
└── sqlite3@5.0.2
```

# Problem:
When you try to insert more books that cause duplicate key you get following error and cds stops responding:
```
[ERROR] SQLITE_MISUSE: Statement is already finalized
```

# How to reproduce:

- `cds watch`
- Run step 1, insert titles "title1" and "title2",  -> ok
- Run step 2, insert only title "title1" again, duplicate key, -> ok
- Run step 3, insert both titles "title1" and "title2" again,  -> message error and cds stops responding