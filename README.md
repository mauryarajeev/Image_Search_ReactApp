# Image_Search_ReactApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


![alt text](https://github.com/mauryarajeev/Image_Search_ReactApp/blob/main/screen_two.png?raw=true)
![alt text](https://github.com/mauryarajeev/Image_Search_ReactApp/blob/main/screen_one.png?raw=true)

## File Explanation

In the project directory, you can run:

### UseAxios Components

The code you provided is a custom React hook named useAxios that makes HTTP requests using the Axios library. It returns an object containing the response data, loading state, error message, and a fetchData function for manually triggering a request.

### Image Components

The code you provided is a React component named Image that displays an image and opens a modal when clicked. The modal contains additional details about the image, such as the alt_description, id, created_at, and likes.

### Images Components

this component displays a collection of images based on the response data received from the ImageContext context. It renders the Image component for each image and displays a loading skeleton when the data is being fetched. The page header indicates the search term used, defaulting to "Cats" if no search term is available.

### Jumbotron Components

The code you provided is a React component named Jumbutron that represents a jumbotron-style container. It displays a background color, a heading, and any children components passed to it.

### SearchField Components

search field and button for querying images. It uses the useContext and useState hooks to manage the search value and access the fetchData and setSearchImage functions from the ImageContext context.
Skeleton that generates a specified number of skeleton loading elements. It uses the Array constructor and the map function to create an array of skeleton elements based on the item prop.

### Skeleton Component

this component generates a specified number of skeleton loading elements, which are often used to provide a visual indication of content loading. The number of skeleton elements is determined by the item prop, and each skeleton element is a <div> with appropriate styling classes.

### Skeleton Component

this component sets up the application structure by providing a context that holds the necessary data and functions. It renders the Jumbutron component with the SearchField component as its child and the Images component. The initial data is fetched using the useAxios hook. The ImageContext.Provider component ensures that the child components have access to the provided values and functions.
