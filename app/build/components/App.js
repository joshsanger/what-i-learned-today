import React, {Component, Fragment} from 'react';
import Top from "./Top";
import Learn from "./Learn";
import Footer from "./Footer";

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data    : false,
            fetching: true,
            error: false
        };
    }


    fetchData = async (direction = false) => {

        try {

            const response = await fetch('api/fetch-date.php', {
                method: 'POST',
                body: JSON.stringify({
                    date : (!!direction && this.state.data.date ? this.state.data.date : new Date()),
                    direction
                }),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})

            const data = await response.json();

            if (data.error) {
                throw data.error;
            }

            this.setState({
                data: data.data
            })

        } catch (e) {

            let theError = 'Oh snap! Something has gone horribly wrong. Try again later.';

            if (!!e && typeof e === 'string') {
                theError = e;
            }

            this.setState({
                error: theError
            })

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

    render() {
        return (
            <Fragment>
                <div style={{background: (this.state.data && this.state.data.color ? this.state.data.color : '#8393ca')}}>
                    <Top data={this.state.data} fetchData={(direction) => {this.fetchData(direction)}}/>
                    <Learn data={this.state.data} />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default App;