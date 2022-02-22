import pokemon from "./pokemon"
import pokeCard from "./pokecard"

const pokedex = (props) => {
    return (
        <>
        <table>
        {props.map((p) => {
            <td>
                <pokeCard image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} name={p.name} exp={p.base_experience} type={p.type}/>
            </td>
        })}
        </table>
        </>
    )
}

export default pokedex;