#Simple TCP Server

##To Submit this Assignment
  * fork this repository
  * write all of your code in a folder containing your name
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas

##Description

Write a simple TCP chat server. When a client writes (sends a message) to your server, the server should write that message out to all the clients *except* the client that wrote it to the server. Each client should have a username of some sort displayed.

##Rubric
chat server: 4pts
broadcast functionality: 4pts
testing: 2pts

##Stretch
Allow clients to set their own usernames. Rather than using telnet from the command line write a Node client for your chat server that takes input from the command line and writes the output from the server.