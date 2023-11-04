# Chat microservice

```
Services
    - API       : Interact with apis
    - Auth      : Provide Authorization
    - Presence  : Socket, to get presence of user
    - Chat      : Socket, provide chat service
```

```
PORTs
    - 5672  : RabbitMQ
    - 15672 : RabbitMQ
    - 5432  : Postgres
    - 15432 : pgadmin
    - 6379  : Redis
    - 4000  : API
    - 6000  : Presence
    - 7000  : Chat
```

```
APIs

GET localhost:4000/users
    req.body {}
    res []

POST localhost:4000/auth/register
    req.body {
            "firstName": string,
            "lastName": string,
            "email": string,
            "password": string
        }

POST localhost:4000/auth/login
    req.body {
            "email": string,
            "password": string
        }
    res {
        "token": string,
        "user": {}
    }

POST localhost:4000/add-friend/:id
    Header 'Authorization' => bearer token
    req.body {}
    res {
        "creator": {},
        "reciver": {}
    }

GET localhost:4000/get-friends
    Header 'Authorization' => bearer token

POST localhost:4000/get/chat
    Header 'Authorization' => bearer token
    req.body {
        "conversationId": number
    }
    res {
        "status": boolean,
        "conversationId": number,
        "data": []
    }
```

```
Socket 6000
Header 'Authorization' => bearer token

frontend emit 'updateActiveStatus'
{
     isActive: boolean
}

Server emit "friendActive"
{
     id: string,
     isActive: boolean
}

```

```
Socket 7000
Header 'Authorization' => bearer token

Server emit "getAllConversations"
{

}

frontend emit 'sendMessage'
{
     message: text,
      friendId,
      conversationId,
}

server emit "newMessage"
{
     id,
      message,
      creatorId,
      conversationId,
}
```
