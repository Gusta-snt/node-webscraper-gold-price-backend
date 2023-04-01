# Gold price Webscraper

This is a simple Node.js application that acts as a web scraper to retrieve the current value of the gold. The application uses Axios and Cheerio library to make an HTTP request to an external API that provides this information.
get the data.

To run this application, you will need to have Node.js and npm installed on your machine.

## Installation

  In your terminal.
- Clone this repository:  
  `git clone https://github.com/Gusta-snt/node-webscraper-gold-price-backend`   
- Navigate to the project directory in your terminal.   
  `cd node-webscraper-gold-price-backend`   
- Run npm install to install the project dependencies.   
  `npm install`

## Running the Application

- To start the application, run the following command in your terminal:   
  `npm start`   

The server will start running on port 8000.

## API Routes

The application has a single route:
GET /ouro

This route returns the current value of the gold in real (BRL). The response body will be in JSON format:

`{
  "cotacao": 5.68
}`

- Disclaimer: The / route was just for my own learning about express and backend with node. This route responses in JSON format:  
`"This is my webscraper"`

## Dependencies

- axios: ^0.27.2
- express: ^4.18.1
- cheerio: ^1.0.0-rc.12
- cors: ^2.8.5

## Author
<img src="https://i.ibb.co/zmSvf43/Gustavo.png" width="200px">
Made with love by Gusta ❤️. My social networks:<br/><br/>
<a href="https://www.instagram.com/gustavo_santosfr/" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/gustavo-ferreira-dos-santos-a3b6b1231/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="https://github.com/Gusta-snt" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
