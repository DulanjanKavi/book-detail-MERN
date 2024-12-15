# Book Detail MERN

This is a MERN stack application for managing book details. The application allows users to create, read, update, and delete book information.

## Features

- **Create Book**: Add new books with title, author, and publish year.
- **Read Book**: View details of all books.
- **Update Book**: Edit existing book details.
- **Delete Book**: Remove books from the list.

## Technologies Used

- **MongoDB**: Database for storing book details.
- **Express.js**: Backend framework for building the API.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the backend server.
- **Tailwind CSS**: Utility-first CSS framework for styling the frontend.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/DulanjanKavi/book-detail-MERN.git
    cd book-detail-MERN
    ```

2. **Install dependencies for the backend**:
    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```bash
    cd ../frontend
    npm install
    ```

## Running the Application

1. **Start the backend server**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend server**:
    ```bash
    cd ../frontend
    npm start
    ```

3. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## API Endpoints

- **GET /books**: Retrieve all books.
- **GET /books/:id**: Retrieve a single book by ID.
- **POST /books**: Create a new book.
- **PUT /books/:id**: Update an existing book by ID.
- **DELETE /books/:id**: Delete a book by ID.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
