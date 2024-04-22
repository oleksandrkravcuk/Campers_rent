import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import MainContainer from "../../layouts/MainContainer";
import FavIcon from "../../components/icons/FavIcon";
import { HeaderBlock, Nav, NavigLink } from "./Header.styled";
import ButtonWra from "../../components/ToggleThemeBtn/ToggleThemeBtn";
import { SlHome } from "react-icons/sl";

const Header = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <HeaderBlock>
      <MainContainer>
        <Nav>
          <ul>
            <li>
              <NavigLink to="/">
              <SlHome/>
              </NavigLink>
            </li>
            <li>
              <NavigLink to="/catalog">Catalog</NavigLink>
            </li>
            <li>
            <ButtonWra></ButtonWra>
            </li>
            <li>
              <NavigLink id="favs" to="/favorites">
                {favorites.length > 0 && <div>{favorites.length}</div>}
                <FavIcon width={30} height={30} />
              </NavigLink>
            </li>
          </ul>
        </Nav>
      </MainContainer>
    </HeaderBlock>
  );
};

export default Header;
