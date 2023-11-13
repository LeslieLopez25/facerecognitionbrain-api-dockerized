<h1>Face Recognition Brain - Dockerized :adult:</h1>

<h2>Backend</h2>

<p>This is version dockerized version of the Face Recognition Brain project that uses docker and redis.

- Clone this repo
- run npm install
- Make sure you have docker installed and running on your computer
- Run docker-compose up ( you may have to run docker-compose up --build for the first setup phase)
- You must add your own API key in the controllers/image.js file to connect to Clarifai API.
- You will also need to update Line 22 in server.js to your client app port (i.e. 3001)

Important: if you are getting conflict errors, you should run docker stop <container name> that is already running in the background. Important: if you are getting other errors, you should run docker-compose down to bring everything down, and start over.

To access backend's bash: Run docker-compose exec smart-brain-api bash

To access postgres: (adjust PORT number if needed) Run psql postgres://<username>:<password>@localhost:5432/smart-brain

To access redis: Run docker-compose exec redis redis-cli

\*\* Make sure you use postgreSQL instead of mySQL for this code base.

</p>
