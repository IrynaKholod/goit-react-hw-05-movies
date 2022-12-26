import {AiOutlineSearch} from "react-icons/ai";
import {SearchContainer} from "./SearchBox.styled"
export const SearchBox =({onChange}) => {
    return (
        <SearchContainer>
             <input type="text" placeholder="Search" onChange={e=> onChange(e.target.value)} />
             <AiOutlineSearch size ="20" color= "grey"/>
        </SearchContainer>
    )
}