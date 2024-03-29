import React from 'react';
import axios from 'axios';



import './App.css';
class App extends React.Component {
    state = {advice : ''};

    componentDidMount() {
      this.fetchAdvice();
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then(this.handleAdviceResponse)
        .catch(this.handleAdviceError)
         

    }

    handleAdviceResponse = (response) =>{
        const { advice } =  response.data.slip
        this.setState({advice})
    }

    handleAdviceError = (error) =>{
        console.log(error)

    }
    render() {
        // the body 
        const { advice }= this.state

        return (
            <>
            <div className='App'>
                <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button'onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
                </div>
                <div className='footer'>Made by @MrinalSingha</div>
               
            </div>
            </>
            
        );
    }
}
export default App;