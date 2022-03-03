const Heading = props => {
    console.log(props)
    return <h2 className={props.textColor}>{props.text}</h2>
}

export default Heading;