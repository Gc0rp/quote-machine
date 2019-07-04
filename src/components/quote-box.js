import React from 'react';
import quotes from './quotes';

class QuoteBox extends React.Component { 


    constructor(props){
        super(props);

        this.state = {
            quote: '',
            author: ''
        };

        this.pickNewQuote = this.pickNewQuote.bind(this);
    }

    pickNewQuote(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * quotes.length);
        const quotePicked = quotes[randomNumber];
        this.setState({
            quote: quotePicked.text,
            author: quotePicked.from
        });

    }

    render() {
        
        return(
            <div id="box">
                
                <h3>{this.state.quote}</h3>
                
                <p> - {this.state.author}</p>
                <button className="btn" type="submit" onClick={this.pickNewQuote}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;