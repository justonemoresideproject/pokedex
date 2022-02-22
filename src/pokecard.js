const pokecard = (props) => {
    return (
        <>
            <h3>
                {props.name}
            </h3>
            <img>
                {props.image}
            </img> 
            <div>
                Type: {props.type}
                EXP: {props.exp}
            </div>

        </>
    )
}

export default pokecard;