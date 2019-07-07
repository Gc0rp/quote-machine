import React from 'react';
import $ from 'jquery';

import quotes from './quotes';

import twitterLogo from '../images/twitter.png';
import facebookLogo from '../images/facebook.png';

import colorList from '../constants/css/colors';

class QuoteBox extends React.Component { 


    constructor(props){
        super(props);

        this.state = {
            quote: '',
            author: ''
        };

        this.newQuoteRequested = this.newQuoteRequested.bind(this);
        this.pickNewQuote = this.pickNewQuote.bind(this);
    }

    componentDidMount() {
        setTimeout( () => {
            this.pickNewQuote();
        }, 500);
    }

    pickNewQuote() {
        let randomNumber = Math.floor(Math.random() * quotes.length);
        const quotePicked = quotes[randomNumber];
        setTimeout(() => { 
            this.setState({
                quote: quotePicked.text,
                author: quotePicked.from
            })}, 500);
        
        randomNumber = Math.floor(Math.random() * colorList.length);
        
        setTimeout(() => { 
            $("body").css("background-color", colorList[randomNumber]);
            $(".social-media").css("background-color", colorList[randomNumber]);       
            $("#new-quote").css("background-color", colorList[randomNumber]);
            $("#box").css("background-color", "white"); 
    
        }, 250);
        
    }
    
    newQuoteRequested(event) {
        event.preventDefault();
        this.pickNewQuote();
    }

    render() {
        
        return(
            <div id="box">
                
                <h3 id="text">{this.state.quote}</h3>
                
                <p id="author"> - {this.state.author}</p>
                
                <div className="row">
                    <div className="col-2">
                        <button className="btn social-media" type="submit">
                            <a href="twitter.com/intent/tweet" id="tweet-quote" >
                                <img src={twitterLogo} />
                            </a>
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn social-media" id="facebook-quote" type="submit">
                            <img src={facebookLogo} />
                        </button>
                    </div>

                    <div className="col-8">
                        <button className="btn" id="new-quote" type="submit" onClick={this.newQuoteRequested}>New Quote</button>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default QuoteBox;