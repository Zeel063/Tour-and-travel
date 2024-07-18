import { Link } from "react-router-dom"

function image(props)
{
    return(
        <div>
            <title>{props.heading}</title>
            <img src={props.ig}/>
            <p>{props.para}</p>
        </div>
    )
}
export default image;