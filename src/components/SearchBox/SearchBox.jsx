import {AiOutlineSearch} from "react-icons/ai";
import {SearchContainer} from "./SearchBox.styled"
export const SearchBox =({onChange, value}) => {
    return (
        <SearchContainer>
             <input type="text" placeholder="Search" value={value} onChange={e=> onChange(e.target.value)} />
             <AiOutlineSearch size ="20" color= "grey"/>
        </SearchContainer>
    )
}