# Gather Clone Project

This is a gather town clone project.

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