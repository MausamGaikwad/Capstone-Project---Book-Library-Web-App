# Book Library Web App
This is a simple web application built using Node.js, Express.js, and PostgreSQL. It allows users to manage a library of books by performing CRUD (Create, Read, Update, Delete) operations.

## Features
* Add Book: Users can add a new book to the library by providing the title, author, and rating.
* View Books: Users can see the list of books stored in the database, along with their titles, authors, and ratings.
* Edit Book: Users can edit the details (title, author, rating) of existing books.
* Delete Book: Users can delete books from the library.
* Reading History: The application also includes functionality for tracking reading history, although it's not currently implemented in the user interface.
## Prerequisites
Before running this application, make sure you have the following installed:

* Node.js
* PostgreSQL
## Setup
1. Clone this repository to your local machine using the following command:
   ```git clone https://github.com/MausamGaikwad/Capstone-Project--Book-Library-Web-App.git```
2. Install dependencies using ```npm install```.
3. Create a PostgreSQL database named ```books```.
4. Run the SQL commands provided in ```schema.sql``` to create the necessary tables.
5. Run the SQL commands provided in ```seed.sql``` to populate the database with sample data.
6. Start the application using ```npm start```.
7. Access the application in your web browser at ```http://localhost:3000```.
## Usages
Adding a Book: Navigate to the home page and fill out the form with the title, author, and rating of the book you want to add. Then click the "ADD BOOK" button.

Viewing Books: Upon accessing the home page, you will see a list of books already in the library, including their titles, authors, and ratings.

Editing a Book: To edit the details of an existing book, find the book in the list and click the "Edit Book" button. This will display a form where you can modify the title, author, and rating of the book. After making your changes, click the "Edit" button to save them.

Deleting a Book: To delete a book from the library, find the book in the list and select the "Delete" option. Confirm the deletion, and the book will be removed from the library.

## Technologies Used
Express.js: Used to build the web server and handle HTTP requests.
PostgreSQL: Database management system used to store book information.
EJS: Embedded JavaScript templating used for generating dynamic HTML content.
HTML/CSS: Used for the structure and styling of the web pages.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
MAUSAM GAIKWAD - GitHub Profile

--- 

Feel free to contribute to this project by submitting pull requests or reporting issues. Enjoy managing your book library! 📚
