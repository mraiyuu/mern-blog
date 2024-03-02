import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
  //check if user is logged in
    const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}
