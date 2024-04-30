
import useFetch from "../useFetch";

const FetchingData = () => {
  // GET request example
  const getResponse = useFetch('https://api.example.com/data');

  // POST request example
  const postResponse = useFetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      // Your POST body data here
    },
  });

  // PUT request example
  const putResponse = useFetch('https://api.example.com/data/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      // Your PUT body data here
    },
  });

  // DELETE request example
  const deleteResponse = useFetch('https://api.example.com/data/1', {
    method: 'DELETE',
    headers: {
      // Add any headers if needed
    },
  });

  // Render your components based on the response data, loading, and error states

  return (
    <>
    
    </>
  )

};

export default FetchingData