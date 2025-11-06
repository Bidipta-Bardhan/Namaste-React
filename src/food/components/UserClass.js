import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count1: 1,
            count2: 2
        }
        console.log(this.props.name+"Child Constructor Called")
    }
    componentDidMount() {
        // This will be called only after first render cycle
        // Use mostly to call api
        console.log(this.props.name + "Child Mount");
    }
    componentDidUpdate() {
        console.log("This will get called after each render cycle")
    }
    componentWillUnmount() {
        // use for clear intervals and all
        console.log("This is equivalent of ngDestroy")
    }
    render() {
        console.log(this.props.name + "Render Called");
        const { name, location, age } = this.props;
        const { count1, count2 } = this.state;
        return (
          <div>
                <div>count1: {count1}</div>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1+1
                    })
                }}>Increase Count1</button>
            <div>count2: {count2}</div>
            <div>Name: {name} </div>
            <div>Location: {location}</div>
            <div>Age: {age}</div>
          </div>
        );
    }
}

export default UserClass;