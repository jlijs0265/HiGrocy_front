import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavTemp = ({ pageType }) => {
  {
    switch (pageType) {
      case "order":
        return (
          <Nav variant="underline">
            <Nav.Item>
              <Nav.Link href="/order">order</Nav.Link>
            </Nav.Item>
            <Nav.Link href="/orderlist">orderlist</Nav.Link>
          </Nav>
          //   <Nav variant="underline" defaultActiveKey="/home">
          //     <Nav.Item>
          //       <Nav.Link href="/home">Active</Nav.Link>
          //     </Nav.Item>
          //     <Nav.Item>
          //       <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          //     </Nav.Item>
          //     <Nav.Item>
          //       <Nav.Link eventKey="disabled" disabled>
          //         Disabled
          //       </Nav.Link>
          //     </Nav.Item>
          //   </Nav>
        );

      case "productRequest":
        return (
          <div className="d-flex justify-content-between">
            <Nav variant="underline">
              <NavItem>
                <Nav.Link href="/pr">pr</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="/prlist">prlist</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="/pm">pm</Nav.Link>
              </NavItem>
            </Nav>
          </div>
        );
      case "item":
        return (
          <Nav variant="underline">
            <NavItem>
              <Nav.Link href="/raw_material">raw_material</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/product">product</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/process">process</Nav.Link>
            </NavItem>
          </Nav>
        );
      case "storage":
        return (
          <Nav variant="underline">
            <NavItem>
              <Nav.Link href="/storage">창고관리</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/wh">재고관리</Nav.Link>
            </NavItem>
          </Nav>
        );
    }
  }
};
export default NavTemp;
