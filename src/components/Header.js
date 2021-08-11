import Button from './Button'

export const Header = ({ title, onAdd, showAdd }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}/>
        </div>
    )
}

// Set default value for [header.props]
Header.defaultProps = {
    title: "To-Do App!"
}

// Set data type for [header.prop] value
// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }


export default Header;