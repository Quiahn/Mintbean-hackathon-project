import Home from "./pages/Home"
import Game from "./pages/Game"
import About from "./pages/About"
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./misc/Navbar";
import { useState, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./misc/UserContext";
import GamePlay from "./pages/GamePlay";

function App() {
    const [userDataGlobal, setUserDataGlobal] = useState({ loggedIn: false, data: null })
    const providerValue = useMemo(() => ({ userDataGlobal, setUserDataGlobal }), [userDataGlobal, setUserDataGlobal])

    return (
        <UserContext.Provider value={providerValue}>
            <div className="flex flex-col h-screen ">
                <Navbar />
                <Switch>

                    <Route path="/" exact>
                        <div className="h-full w-full bg-yellow-600">
                            <Home />
                        </div>
                    </Route>

                    <Route path="/signup">
                        <SignUp />
                    </Route>

                    <Route path="/signin">
                        <SignIn />
                    </Route>

                    <Route path="/game" exact>
                        <Game />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/game/play" exact>
                        <GamePlay />
                    </Route>
                    <Route>
                        <Error />
                    </Route>

                </Switch>

            </div>
        </UserContext.Provider>
    );
}
//<Navbar />
export default App;