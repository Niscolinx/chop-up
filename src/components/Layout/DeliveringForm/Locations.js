import React from 'react'

export const cities = ['okigwe', 'uture', 'Absu', 'Enugu', 'Umuahia']

export const areas = ['Upgate', 'Owerri-road', 'student affairs', 'School cafe', 'Rc']



// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

class RandomQuoteMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [],
        };
    }

    randomNumber() {
        return Math.floor(Math.random() * 102)
    }

    componentWillMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(data => this.setState({ quotes: data }));

    }

    getQuote() {
        let number = this.randomNumber();
        let quotes = this.state.quotes
        console.log(number)
        console.log(quotes)

    }

    render() {
        this.getQuote()

        return (
            <div>
                <div id="quote">
                    <p id="text"></p>
                    <p id="author"><cite></cite></p>
                </div>
                <button id="new-quote">New Quote</button>
                <a href="twitter.com/intent/tweet" id="tweet-quote"><i class="icon-twitter"></i>Tweet</a>
            </div>
        )
    }

}

ReactDOM.render(<RandomQuoteMachine />, document.getElementById("quote-box"));