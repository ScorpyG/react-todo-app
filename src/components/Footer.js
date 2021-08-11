import Clock from 'react-live-clock'

function Footer() {
    return (
        <footer className="date-time">
            <h3>Local Date & Time</h3>
            <Clock format='dddd, MMMM Mo, YYYY'/>
            <br></br>
            <Clock format={'HH:mm:ss'} ticking={true} />
        </footer>
    )
}

export default Footer
