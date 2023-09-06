import { NavLink } from "react-router-dom";

const NavTemp = ({ pageType }) => {
    {
        switch (pageType) {
            case 'order':
                return (
                    <div className="d-flex justify-content-between">
                        < NavLink to="/order">
                            order
                        </NavLink >
                        < NavLink to="/orderlist" >
                            orderlist
                        </NavLink >
                    </div>
                )

            case 'productRequest':
                return (
                    <div className="d-flex justify-content-between">
                        < NavLink to="/pr">
                            pr
                        </NavLink >
                        < NavLink to="/prlist" >
                            prlist
                        </NavLink >
                        < NavLink to="/pm" >
                            pm
                        </NavLink >
                    </div>
                )
            case 'item':
                return (
                    <div className="d-flex justify-content-between">
                        < NavLink to="/raw_material">
                            raw_material
                        </NavLink >
                        < NavLink to="/product">
                            product
                        </NavLink >
                        < NavLink to="/process" >
                            process
                        </NavLink >
                    </div>
                )
            case 'storage':
                return (
                    <div className="d-flex justify-content-between">
                        < NavLink to="/storage">
                            storage
                        </NavLink >
                        < NavLink to="/wh">
                            wh
                        </NavLink >
                    </div>
                )


        }
    }

}
export default NavTemp;