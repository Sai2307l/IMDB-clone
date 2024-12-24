import Menu from "./header/menu";
import Option from "./header/option";
import SearchBar from "./header/searchbar";

export default function Header() {
  return (
    <header>
      <Menu />
      <Option />
      <SearchBar />
    </header>
  );
}
