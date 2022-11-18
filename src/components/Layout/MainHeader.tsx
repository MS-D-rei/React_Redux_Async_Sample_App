import { MainHeaderHeader } from "@/components/Layout/MainHeaderStyle";
import CartButton from "@/components/Cart/CartButton";

function MainHeader() {
  return (
    <MainHeaderHeader>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </MainHeaderHeader>
  );
}

export default MainHeader;
