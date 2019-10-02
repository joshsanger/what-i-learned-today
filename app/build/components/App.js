import React, {Component, Fragment} from 'react';
import {Swipeable} from 'react-swipeable'
import Top from "./Top";
import Learn from "./Learn";
import Footer from "./Footer";
import Swipe from 'react-easy-swipe';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data    : false,
            fetching: true,
            error: false,
            currentItem: 0,
            left: true,
            right: false
        };
    }


    switchItems = (direction = 'left') => {

        let currentItem;

        if (direction == 'left') {
            currentItem = this.state.currentItem - 1;
        } else {
            currentItem = this.state.currentItem + 1;
        }

        this.setState({
            left: !(currentItem <= 0),
            right: !(currentItem >= (this.state.data.length - 1)),
            currentItem
        });

    }

    fetchData = async () => {

        try {

            const response = await fetch('api/fetch-date.php', {
                method: 'GET',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})

            const data = await response.json();

            if (data.error) {
                throw data.error;
            }

            this.setState({
                data: data.data,
                currentItem: (data.data.length - 1),
                left: (data.data.length > 1),
                right: false
            });

        } catch (e) {

            let theError = 'Oh snap! Something has gone horribly wrong. Try again later.';

            if (!!e && typeof e === 'string') {
                theError = e;
            }

            this.setState({
                error: theError
            });

            console.log(theError);


        } finally {
            this.setState({
                fetching: false
            });
        }
    }

    componentDidMount() {

        document.body.style.opacity = 1;
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentItem != this.state.currentItem) {
            document.querySelector('meta[name="theme-color"]').setAttribute('content', this.state.data[this.state.currentItem].color);
        }
    }


    render() {
        if (this.state.fetching) {
            return (
                <div>
                    <div id="color-wrap" style={{background: '#ffffff'}}></div>
                </div>
            );
        }

        if (this.state.error) {
            return (
                // todo: handle errors
                <div>

                </div>
            )
        }


        const current = this.state.data[this.state.currentItem];

        console.log(this.state);

        return (
            <Swipeable
                onSwipedRight={() => {
                    if (this.state.left) {
                        this.switchItems('left');
                    }
                }}
                onSwipedLeft={() => {
                    if (this.state.right) {
                        this.switchItems('right');
                    }
                }}>
                <div id="color-wrap" style={{background: ((current && current.color) ? current.color : '#8393ca')}}>
                    <Top data={current} switchItems={(direction) => {this.switchItems(direction)}} left={this.state.left} right={this.state.right}/>
                    <Learn data={current} />
                </div>
                <Footer />
            </Swipeable>
        );
    }
}

export default App;