import styled from "styled-components"
import MainLayout from "../../components/ui/layout/MainLayout"
import CustomButton from "../../components/ui/button/CustomButton"
import {useState } from "react"
import usePokemons from '../../hooks/usePokemons'
import TextInput from "../../components/ui/input/TextInput"
import useDebounce from "../../hooks/useDebounce"
import CustomTable from "../../components/ui/table/CustomTable"
import ListView from "../../components/ui/list/ListView"
import { useDispatch, useSelector } from "react-redux"
import { gridMode, listMode } from "../../features/view/viewSlice"

const Logo = styled.img`
    object-fit: contain;
    width: 250px;
    height: 92.51px;
    @media (min-width: 769px){
        width: max-content;
        height: max-content;
    }
`

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 769px) {
        flex-direction: row;   
    }
    justify-content: space-between;
    width: 65%;
`
function Home () {
    const [search, setSearch] = useState('');
    const searchInput = useDebounce(search, 450);
    const {pokemons, isLoading, error} = usePokemons(searchInput, 0);
    const {viewMode} = useSelector((store) => store.view);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        try {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            window.location.reload()
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return (
        <MainLayout className="home">
            <Logo src={'/pokedexLogo.png'} alt="pokedexLogo"/>
            <CustomButton active={true} onClick={handleLogOut}>Cerrar sesión</CustomButton>
            <ControlsContainer>
                <TextInput placeholder={'Buscar Pokémon'} type={'text'} onChange={(e) => setSearch((prev) => e.target.value)} />
                <div style={{
                    display: 'flex'
                }}>
                    <CustomButton active={viewMode == 'list' ? true : false} onClick={() => dispatch(listMode())}>Lista</CustomButton>
                    <CustomButton active={viewMode == 'grid' ? true : false} onClick={() => dispatch(gridMode())}>Cuadrícula</CustomButton>
                </div>
            </ControlsContainer>
            <div>
                {(viewMode == 'list') ? 
                    <CustomTable data={pokemons} isLoading={isLoading} error={error}/>
                    :
                    <ListView data={pokemons} isLoading={isLoading} error={error} />
                }
            </div>
            
        </MainLayout>
    )
}

export default Home