import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilesView from "./FilesView";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SideIcons from "./SideIcons";
import "./App.css";
import { auth } from "./firebase";
import Login from "./Login";
import { login, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
