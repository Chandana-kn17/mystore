import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Location,
  LocationTitle,
  LocationSub,
  Nav,
  NavItem,
  Spacer,
  Icons,
  Icon,
} from "./Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        {/* Logo */}
        <Logo src="https://cielorestaurant.staging.zopping.com/favicon.ico" />

        {/* Location */}
        <Location>
          <LocationTitle>Delivery To</LocationTitle>
          <LocationSub>Select Address ▼</LocationSub>
        </Location>

        {/* Navigation */}
        <Nav>
          <NavItem>Burgers</NavItem>
          <NavItem>
            Starters <span>▼</span>
          </NavItem>
          <NavItem>Beverages</NavItem>
          <NavItem>French Fries</NavItem>
        </Nav>

        <Spacer />

        {/* Right Icons */}
        <Icons>
          <Icon>🔍</Icon>
          <Icon>🛒</Icon>
          <Icon>👤</Icon>
        </Icons>
      </HeaderInner>
    </HeaderWrapper>
  );
}