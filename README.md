# Intro

Entity `Books` with unique key `title`.

Action `addBooks` with input many books, insert all of them

File `test.http` with 3 steps


# Problem:
When you try to insert more books that cause duplicate key you get following error and cds stops responding:
```
[ERROR] SQLITE_MISUSE: Statement is already finalized
```

# How to reproduce:

- `cds watch`
- Run step 1, insert titles "title1" and "title2",  -> ok
- Run step 2, insert title "title1" again, duplicate key, -> ok
- Run step 3, insert titles "title1" and "title2" again,  -> message error and cds stops responding