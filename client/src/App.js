import Home from "./pages/Home"
import Game from "./pages/Game"
import About from "./pages/About"
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./misc/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {

    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/signup">
                    <SignUp />
                </Route>

                <Route path="/signin">
                    <SignIn />
                </Route>

                <Route path="/game">
                    <Game />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route>
                    <Error />
                </Route>

            </Switch>

        </div>

    );
}

export default App;