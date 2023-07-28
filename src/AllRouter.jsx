import {Routes,Route} from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import HomePage from "./components/HomePage";
// import CartModal from "./components/CartModal";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<Signup />} /> 
        </Routes>
    )
}
export default AllRoutes;