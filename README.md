# GAME: Card Wars

## Freatures

### Accounts
![image of creating an account](https://user-images.githubusercontent.com/73269468/128045962-14799bf1-e2d6-4553-b0dc-1c260c1ee3cd.png)

### Live chat in dashboard
![image of chat](https://www.cardwars.org/static/media/login.a6edd90b.png)

### Leaderboard based on win/lose ration
![image of leaderboard](https://i.ibb.co/850ZFx1/Screenshot-2021-08-03-115240.png)

### Ai to play against
![image of gameplay](https://i.ibb.co/G979kcp/Screenshot-2021-08-03-115724.png)

### Account Stats
![image of account stats](https://www.cardwars.org/static/media/stats.c376fc98.png)

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
      
      

Receive

- User ID
- Username

```
{
   "id":"user._id",
   "username":"user.username"
}
```



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

# Technologies Used
### React
### Tailwind Css
### MongoDB
### Node JS
### Mongoose
### Express
