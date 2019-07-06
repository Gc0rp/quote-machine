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

        this.pickNewQuote = this.pickNewQuote.bind(this);
    }

    pickNewQuote(event) {
        event.preventDefault();
        let randomNumber = Math.floor(Math.random() * quotes.length);
        const quotePicked = quotes[randomNumber];
        this.setState({
            quote: quotePicked.text,
            author: quotePicked.from
        });
        
        randomNumber = Math.floor(Math.random() * colorList.length);
        $("body").css("background-color", colorList[randomNumber]);
        
        $("#tweet-quote").addClass("animated fadeIn").css("background-color", colorList[randomNumber]);
        
        $("#facebook-quote").css("background-color", colorList[randomNumber]);
        $("#new-quote").css("background-color", colorList[randomNumber]);

        $("#box").css("background-color", "white");

        $("#tweet-quote").removeClass("fadeIn");
    }

    

    render() {
        
        return(
            <div id="box">
                
                <h3>{this.state.quote}</h3>
                
                <p> - {this.state.author}</p>
                
                <div className="row">
                    <div className="col-2">
                        <button className="btn social-media" id="tweet-quote" type="submit">
                            <img src={twitterLogo} />
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn social-media" id="facebook-quote" type="submit">
                            <img src={facebookLogo} />
                        </button>
                    </div>

                    <div className="col-8">
                        <button className="btn" id="new-quote" type="submit" onClick={this.pickNewQuote}>New Quote</button>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default QuoteBox;