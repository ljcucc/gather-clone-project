# Gather Clone Project

This is a gather town clone project.

# Documents

### Server API

on `localhost:3000/`:

* `/api/get_room_list/:id/:clientID` (method: `GET`):
  * params:
    * `id`: ID of your room
    * `clientID`: your socket.io client ID (you can get it by using `socket.id` at client)
  * reutrns: a JSON object
    * `success`: the request is success or not.
    * `msg`: error message
    * `data`: client list (when success)

## Socket event list

here is a list of socket events.

### Server to Client call
* `user-joined`: on a user joined to a room.
* `userlist-update`: on update user list from server when neede.
* `user-leave`: (unfinished) on user leave.
* `get-room-client-list-feedback` : (unfinished) feedback of `get-room-client-list`.

### Client to Server call

* `join-room`： Join a room request.
* `get-room-client-list`: request get room clients list ID.

# Collaboration

co-author commit rules:

* When you're cowork by using LiveShare: add Co-author after commit message
* When you're finished a commit yourself, you can commit without co-author tag