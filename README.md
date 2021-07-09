# Simple CRUD application with [Express] and [Sequelize]

***

List Users
----------
To list all users you just need a `GET` request.
```sh
' application_path/users '
```

To list a single user you just need a `GET` request with id as parameter.
```sh
' application_path/users/:id '
```

Add User
----------
To add a new user you just need a `POST` request with necessary body arguments.
```sh
' application_path/users '
```

#### Sample request body
```sh
{
    name: "Jane",
    favoriteColor: "blue",
    age: 25,
    cash: 2900
}
```

Update User
----------
To update a specific user you just need a `PUT` request with necessary body arguments and id as parameter.
```sh
' application_path/users/:id '
```
#### Sample request body
```sh
{
    cash: 3500
}
```

Delete User
----------
To delete a specific user you just need a `DELETE` request with id as parameter.
```sh
' application_path/users/:id '
```
   [sequelize]: <https://sequelize.org/>
   [express]: <http://expressjs.com>