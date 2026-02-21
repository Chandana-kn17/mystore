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
  Spacer,
  Icons,
  Icon,
} from "./Header.styles";

import SearchIcon from "@/lib/icons/SearchIcon";
import LockIcon from "@/lib/icons/LockIcon";
import UserIcon from "@/lib/icons/UserIcon";
import BellIcon from "@/lib/icons/BellIcon";

export default function Header() {
  return (
    <HeaderWrapper>
  <HeaderInner>

    {/* LEFT SECTION */}
    <LeftSection>
      <Logo src="https://cielorestaurant.staging.zopping.com/favicon.ico" />

      <Location>
        <LocationTitle>Delivery To</LocationTitle>
        <LocationSub>Select Address ▼</LocationSub>
      </Location>
    </LeftSection>

    {/* CENTER NAV */}
    <Nav>
      <NavItem>Home</NavItem>
      <NavItem>Category</NavItem>
      <NavItem>AllProduct</NavItem>
      <NavItem>About Us</NavItem>
      <NavItem>Blog</NavItem>
    </Nav>

    {/* RIGHT ICONS */}
    <Icons>
      <Icon><SearchIcon width={27} height={27} fill="#1a1a1a" /></Icon>
      <Icon><BellIcon width={27} height={27} fill="#1a1a1a" /></Icon>
      <Icon><LockIcon width={27} height={27} fill="#1a1a1a" /></Icon>
      <Icon><UserIcon width={27} height={27} fill="#1a1a1a" /></Icon>
    </Icons>

  </HeaderInner>
</HeaderWrapper>

  );
}
