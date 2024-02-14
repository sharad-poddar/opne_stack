## User administration
If we were working with a relational database the implementation would be straightforward. Both resources would have their separate database tables, and the id of the user who created a note would be stored in the notes table as a foreign key.

When working with document databases the situation is a bit different, as there are many different ways of modeling the situation.

If we need functionality similar to join queries, we will implement it in our application code by making multiple queries. In certain situations, Mongoose can take care of joining and aggregating data, which gives the appearance of a join query. However, even in these situations, Mongoose makes multiple queries to the database in the background.

### References across collections
If we were using a relational database the note would contain a reference key to the user who created it. In document databases, we can do the same thing.

Let's assume that the users collection contains two users:

``` js
[
    {
        username: 'mluukkai',
        _id: 123456,
        notes: [221212, 221255]
    },
    {
        username: 'hellas',
        _id: 141414,
        notes: [221244]
    },
]
```

The notes collection contains three notes that all have a user field that references a user in the users collection:
```js
[
    {
        content: 'HTML is easy',
        important: false,
        _id: 221212,
        user: 123456,
    },
    {
        content: 'The most important operations of HTTP protocol are GET and POST',
        important: true,
        _id: 221255,
        user: 123456,
    },
    {
        content: 'A proper dinosaur codes with Java',
        important: false,
        _id: 221244,
        user: 141414,
    },
]
```

sometime its organising is different as we can add whole notes array in respective users
```js
[
    {
        username: 'mluukkai',
        _id: 123456,
        notes: [
            {
                content: 'HTML is easy',
                important: false,
            },
            {
                content: 'The most important operations of HTTP protocol are GET and POST',
                important: true,
            },
        ],
    },
    {
        username: 'hellas',
        _id: 141414,
        notes: [
            {
                content:
                'A proper dinosaur codes with Java',
                important: false,
            },
        ],
    },
]
``` 

schema-less databases like Mongo require developers to make far more radical design decisions about data organization at the beginning of the project than relational databases with schemas. On average, relational databases offer a more or less suitable way of organizing data for many applications.


### Creating users
Let's implement a route for creating new users. Users have a unique username, a name and something called a passwordHash. The password hash is the output of a one-way hash function applied to the user's password. It is never wise to store unencrypted plain text passwords in the database!

```
    npm install bcrypt
```
