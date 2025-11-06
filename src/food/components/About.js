import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props) {
        super(props);
        console.log("Parent Constructor Called")
    }
    componentDidMount() {
        console.log("Parent Did Mount")
    }
    render() {

        console.log("Parent Render");
        return (
          <div>
            <div>This is About Us Page</div>
            <UserClass name={"First"} location={"Kolkata"} age={"25"} />
            <UserClass name={"Second"} location={"Kolkata"} age={"25"} />
          </div>
        );
    }
}

// const About = () => {
//     return (
//       <div>
//             <div>This is About Us Page</div>
//             <UserClass name={"Bidipta Rockstar"} location={"Kolkata"} age={"25"} />
//       </div>
//     );

// }

export default About

/**
 * - Parent Constructor
 * - Parent Render
 *         
 * -------- Render phase of child are batched together -------------
 *   - First Child Constructor
 *   - First Child Render
 *   - Second Child Constructor
 *   - Second Child Render
 * 
 * -------- Commit phase of child are batched together ----------
 *   - First Child Mount
 *   - Second Child Mount
 * 
 * - Parent Mount
 */