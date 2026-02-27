import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Location,
  LocationTitle,
  LocationSub,
  Nav,
  LeftSection,
  NavItem,
  Icons,
  Icon,
  BagIconWrapper,
  CartBadge,
} from "./Header.styles";

import SearchIcon from "@/lib/icons/SearchIcon";
import BagIcon from "@/lib/icons/BagIcon";
import UserIcon from "@/lib/icons/UserIcon";
import BellIcon from "@/lib/icons/BellIcon";
import DownArrowIcon from "@/lib/icons/DownArrowIcon";

import { useCart } from "@/context/CartContext";

export default function Header({ organization }) {
  const { totalItems, setIsCartOpen } = useCart();

  if (!organization) return null;

  const logo = organization?.logo;
  const orgName = organization?.name;
  const address = organization?.config?.basic?.address;

  return (
    <HeaderWrapper>
      <HeaderInner>

        <LeftSection>
          {logo && <Logo src={logo} alt={orgName} />}

          <Location>
            <LocationTitle>Delivery To</LocationTitle>

            <LocationSub>
              {address ? address.slice(0, 25) + "..." : "Select Address"}
              <DownArrowIcon width={10} height={6} />
            </LocationSub>
          </Location>
        </LeftSection>

        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Category</NavItem>
          <NavItem>All Product</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Blog</NavItem>
        </Nav>

        <Icons>
          <Icon>
            <SearchIcon width={24} height={24} fill="#1a1a1a" />
          </Icon>

          <Icon>
            <BellIcon width={24} height={24} fill="#1a1a1a" />
          </Icon>

          <BagIconWrapper onClick={() => setIsCartOpen(true)}>
            <BagIcon width={24} height={24} fill="#1a1a1a" />

            {totalItems > 0 && (
              <CartBadge>{totalItems}</CartBadge>
            )}
          </BagIconWrapper>

          <Icon>
            <UserIcon width={24} height={24} fill="#1a1a1a" />
          </Icon>
        </Icons>

      </HeaderInner>
    </HeaderWrapper>
  );
}