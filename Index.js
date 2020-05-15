class App extend React.Component {
    render() {
        return ( <
            div >
            <
            h1 > Slot Machine!
            <
            machine a = "x"
            b = "o"
            c = "o" / >
            <
            machine a = "x"
            b = "x"
            c = "x" / >
            <
            machine a = "x"
            b = "x"
            c = "o" / >
            <
            /h1> < /
            div >
        )
    }

}

ReactDOM.render( < App / > , document.getElementById("root"))