import BasicPopover from "../../components/Popover";
import {
  Header,
  IconContainer,
  Img,
  Logo,
  SearchIcon,
  MenuIcon,
} from "../../components/styled-components/Header";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "red",
    color: "white",
  },
}));

function Navbar() {
  return (
    <div>
      <Header>
        <MenuIcon src="/icons/menuicon.svg" alt="menuIcon" />
        <BasicPopover />

        <Logo src="/icons/logo.svg" alt="logo" />
        <IconContainer>
          <SearchIcon>
            <img src="/icons/searchIcon.svg" alt="searchIcon" />
          </SearchIcon>
          <StyledBadge
            invisible={true}
            badgeContent={4}
            color="primary"
            overlap="circular"
          >
            <Img src="/icons/vector.svg" alt="vectorHeart" showIcon />
          </StyledBadge>
          <StyledBadge badgeContent={4} overlap="circular">
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2Zu2sVQRSHv5tooY2IoFFM4TMoivFRq6CIlaCVoKSyEUGwsbLSP0BSplASCyFKJKKIhSDxkS6djQ80RhTjg6sSUIPJtZgz7nq9u+vdPWf2GvxgmMvcmd85Zznz2Fn4T+uxF3gJ1FLKV2AMOAHML8fNbJ6QHkR9uUWLBhMPZCKhz0LgCFCVfmfCuNYce4BxXBD7M/ruwwUyCbQb+2XOU1wwO8p2JE5bjjH3pN6p6UhR8gQyIvUuTUfKoBOXWlXmwDx5jgumu2xHPHlSC1owveZMIHlZhUutj+R/GC3DOC6YzWU7UpQBmjujWRSf4oXSYiS7izkrNUTW4J7KO6CiIdgEF8X2WS3BCRHcqCX4FywAPondLt9YdMW5L3XIZfgQsAgYBR77xqKBlLGf9Eh9SVN0PdH7SYh5sgL4AXwHlmiLv6YuXw05Lbau1P+hsSv7ebJbQSuLo1KrppXnOO4pXbYQj7GdKI1NLj82iIE3FuIxesXOeSsDFeCtGFlrZGNezMZWIxsAXBUjx4z0D4j+o6QOWkdw6/3E7x0DRvq/2IR7Yq8MtBcD34AZlA6JaVRwq0kNWK2s7VfF22mdtFKrBjyQ39rpZXIkSeMkLqB+Rc11wCzwGXf/HIQtuEBeKGqeE80LipqZtAEfsHmlDX5bM6zkeLzcJfwbKKcoIRUs2IYL5FnZjhSlneirVmdIw9q3hDNE+0nQ7ycW1513pO5J7fUPsJTouqaPwCmmzUFgGr0l+GFY93/ncIJTecosYS43GjIkTgwCy6QMSttwwpjrKWOGjP1N5L040BFrWy5t1YQxfm41GjOZZszyI01N6kbHi+mEMb49+JEkjWtEadIhJStN8owxpwuY4s+JO0XyxM0zJgjdwE3gi5QbuPcW7TH8BOO0IY31cDr5AAAAAElFTkSuQmCC" />
          </StyledBadge>
          <StyledBadge>
            <Img src="/icons/user.svg" alt="avatar" showIcon />
          </StyledBadge>
        </IconContainer>
      </Header>
    </div>
  );
}

export default Navbar;
