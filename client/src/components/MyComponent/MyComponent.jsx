import React from 'react'
export class MyComponent extends React.Component {
    state = { data: null, error: null };
  
    componentDidMount() {
      this.fetchData();
    }
  
    async fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        this.setState({ data });
      } catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
      const { data, error } = this.state;
  
      if (error) {
        return <div>Error: {error.message}</div>;
      }
  
      return <div>{data ? <div>{/* Render data */}</div> : <div>Loading...</div>}</div>;
    }
  }
  