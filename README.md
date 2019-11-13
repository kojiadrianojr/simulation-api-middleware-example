### Install dependencies

```
npm install
//npm audit fix
```

### Host to port 8000

```
npm run start-auth
```


### Endpoints

**Login**

```
//http://localhost:8000/auth/login
//json

{
  "username": "jino.lacson@boom.camp",
  "password":"lacson"
}

//result
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imppbm8ubGFjc29uQGJvb20uY2FtcCIsInBhc3N3b3JkIjoibGFjc29uIiwiaWF0IjoxNTczNjI4MDIyLCJleHAiOjE1NzM2MzE2MjJ9.hBR5bpIqNA51ksGOHW7O1vo_-xnveM627VGBCKBXEmQ"
}


```

**User listings**

```
//http://localhost:8000/auth/listings
//Content-Type : application/json
//Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imppbm8ubGFjc29uQGJvb20uY2FtcCIsInBhc3N3b3JkIjoibGFjc29uIiwiaWF0IjoxNTczNjI4MDIyLCJleHAiOjE1NzM2MzE2MjJ9.hBR5bpIqNA51ksGOHW7O1vo_-xnveM627VGBCKBXEmQ


//result
{
  "users": [
    {
      "id": 1,
      "username": "jino.lacson@boom.camp",
      "password": "lacson",
      "firstname": "",
      "lastname": "",
      "status": "1"
    },
    {
      "id": 2,
      "username": "aodhan.hayter@boom.camp",
      "password": "hayter",
      "firstname": "",
      "lastname": "",
      "status": "1"
    },
    {
      "id": 3,
      "username": "greg.doerman@boom.camp",
      "password": "doerman",
      "firstname": "",
      "lastname": "",
      "status": "1"
    },
    {
      "id": 4,
      "username": "trace.lumbao@boom.camp",
      "password": "lumbao",
      "firstname": "",
      "lastname": "",
      "status": "1"
    },
    {
      "id": 5,
      "username": "oscar.escobar@boom.camp",
      "password": "escobar",
      "firstname": "",
      "lastname": "",
      "status": "1"
    }
  ]
}


```

**User update**
```
//TODO:
```