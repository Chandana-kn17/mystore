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
} from "./Header.styles";

import SearchIcon from "@/lib/icons/SearchIcon";
import LockIcon from "@/lib/icons/LockIcon";
import UserIcon from "@/lib/icons/UserIcon";
import BellIcon from "@/lib/icons/BellIcon";
import DownArrowIcon from "@/lib/icons/DownArrowIcon";

export default function Header({ organization }) {
  if (!organization) return null;

  const logo = organization?.logo;
  const orgName = organization?.name;
  const address = organization?.config?.basic?.address;

  return (
    <HeaderWrapper>
      <HeaderInner>
        {/* LEFT SECTION */}
        <LeftSection>
          {logo && <Logo src={logo} alt={orgName} />}

          <Location>
            <LocationTitle>Delivery To</LocationTitle>

            <LocationSub>
              {address ? address.slice(0, 25) + "..." : "Select Address"}
              <DownArrowIcon
                width={10}
                height={6}
                style={{ marginLeft: "6px" }}
              />
            </LocationSub>
          </Location>
        </LeftSection>

        {/* CENTER NAV */}
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Category</NavItem>
          <NavItem>All Product</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Blog</NavItem>
        </Nav>

        {/* RIGHT ICONS */}
        <Icons>
          <Icon>
            <SearchIcon width={24} height={24} fill="#1a1a1a" />
          </Icon>
          <Icon>
            <BellIcon width={24} height={24} fill="#1a1a1a" />
          </Icon>
          <Icon>
            <LockIcon width={24} height={24} fill="#1a1a1a" />
          </Icon>
          <Icon>
            <UserIcon width={24} height={24} fill="#1a1a1a" />
          </Icon>
        </Icons>
      </HeaderInner>
    </HeaderWrapper>
  );
}