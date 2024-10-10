# Phonebook Full Stack Application
This is a Node.js backend built with Express.js and a frontend built with React. 

The backend provides a REST API to manage phonebook entries and also serves the production build of the React frontend.

The application uses MongoDB for data persistence, Morgan for logging, handles CORS with the Cors package, and communicates between the frontend and backend using Axios.

<!-- **You can access the project backend [here](https://uoh-fullstack-open-3-10-phonebook-backend.onrender.com/).** -->

## Task Requirements


See the full task description [here](https://fullstackopen.com/en/part3/deploying_app_to_internet#exercises-3-9-3-11).

## API Endpoints

- **GET** `/api/people` - Fetch all phonebook entries (returns the list of persons)
- **GET** `/api/people/:id` - Fetch a specific phonebook entry by ID
- **POST** `/api/people/` - Add a new phonebook entry
- **PUT** `/api/people/:id` - Update an existing phonebook entry by ID
- **DELETE** `/api/people/:id` - Delete a phonebook entry by ID
- **GET** `/info` - Get phonebook statistics (total number of entries and current date)
