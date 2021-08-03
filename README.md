# API: Card Wars
### Auth Register

Method: `POST`

`path: /api/user/register`

Send

 - Username

 - Password

	   ```json
	{
          username: Sardorbek,
      	password: hello123
      }
      ```
      
      ​     

Receive

- User ID
- Username

```
{
   "id":"user._id",
   "username":"user.username"
}
```

​    

### AUTH LOGIN

` path: /api/user/login`

Method: `POST`

Send

 - Username

 - Password

   ```json
   {
       username: Sardorbek,
   	password: hello123
   }
   ```



Receive

Messages:

- logged in
- Username does not exist
- Invalid password

`"Logged in"`



### Check if user  exists

Method: `POST`

`path:/api/user/username-availability`

```json
{  userExist: bool }
```



### User started the game

Method: `GET`

`path: /api/game/start`

```json
{
   "username":"username",
   "id":"userId",
   "cardsDrawn":"user.cardsDrawn",
   "gamesPlayed":"user.gamesPlayed",
   "gamesWon":"user.gamesWon",
   "gamesLost":"user.gamesLost",
   "date":"user.date"
}
```





### Leaderboard

`path: /api/public/leaderboard/2`

Method: `GET`

Sorted by amount of wins

```json
[
  {
    "gamesWon": 0,
    "gamesLost": 5,
    "gamesPlayed": 11,
    "cardsDrawn": 352,
    "username": "Sardorbek"
  },
  {
    "gamesWon": 0,
    "gamesLost": 0,
    "gamesPlayed": 0,
    "cardsDrawn": 0,
    "username": "Quiahn"
  }
]
```

