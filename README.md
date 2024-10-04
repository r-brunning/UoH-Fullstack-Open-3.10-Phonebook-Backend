# Phonebook Backend
This is a Node.js backend built with Express.js, providing a REST API to manage phonebook entries.

**You can access the deployed backend [here](https://uoh-fullstack-open-3-10-phonebook-backend.onrender.com/).**

## Task Requirements

> Deploy the backend to the internet, for example to Fly.io or Render.
>
> Test the deployed backend with a browser and Postman or VS Code REST client to ensure it works.
>
> PRO TIP: When you deploy your application to the Internet, it is worth it to at least in the beginning keep an eye on the logs of the application AT ALL TIMES.
>
> Create a README.md at the root of your repository, and add a link to your online application to it.
>
> NOTE: as it was said, you should deploy the BACKEND to the cloud service. If you are using Fly.io the commands should be run in the root directory of the backend (that is, in the same directory where the backend package.json is). **In case of using Render, the backend must be in the root of your repository.**
>

See the full task description [here](https://fullstackopen.com/en/part3/deploying_app_to_internet#exercises-3-9-3-11).

## API Endpoints

- **GET** `/` - Fetch all phonebook entries (returns the list of persons)
- **GET** `/:id` - Fetch a specific phonebook entry by ID
- **POST** `/` - Add a new phonebook entry
- **DELETE** `/:id` - Delete a phonebook entry by ID
- **GET** `/info` - Get phonebook statistics (total number of entries and current date)
