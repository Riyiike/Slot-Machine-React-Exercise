class Machine extends React.Component {
    render() {
        const {
            a,
            b,
            c
        } = this.props;
        const winner = (this.props.a === b) && (b == c);
        return ( <
            div >
            <
            p > {
                a
            } {
                b
            } {
                c
            } < /p> <
            p > {
                Winner ? 'Winner!' : 'Loser!'
            } < /p> <
            /div>
        )
    }
}