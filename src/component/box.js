import React from "react";

class Box extends React.Component {


    componentWillMount() {
        this.props.handleClick()
    }

    render() {

        var toiletList = this.props.toilet.map(function (toilet, index) {
            return (
                <div className="innerListDiv" key={index}>
                    <div>

                        <table>
                            <tbody>
                            <tr>
                                <td width="300px">{toilet.map_id}</td>
                                <td width="300px">Toilet type: {toilet.type}</td>
                                {/*<td width="300px">{toilet.queue_level}</td>*/}
                                <td width="300px">Estimated queue time: {toilet.queue_time}</td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>)


        })


        return (

            <div className="wrapper">
                <button onClick={() => {
                    this.props.handleClick()
                }}>REFRESH LIST
                </button>
                <div className="outerListDiv">
                    {toiletList}
                </div>
            </div>
        )
    }
}

export default Box;