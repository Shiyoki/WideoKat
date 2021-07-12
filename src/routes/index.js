import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Wideo from "../views/Wideo";
import EditInfo from "../views/EditInfo";
import Channel from "../views/Channel";
import Upload from "../views/Upload";
import Vid from "../views/Vid";
import Channeluser from "../components/Channeluser";
import Register from "../views/Register";
import Report from "../views/Report";
import OtherChannel from "../views/OtherChannel";
import SearchView from "../views/SearchView";
import Stats from "../views/Stats";
import Editvideo from "../views/Editvideo";

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/wideo" exact>
                    <Wideo />
                </Route>
                <Route path="/edit" exact>
                    <EditInfo />
                </Route>
                <Route path="/channel">
                    <Channel />
                </Route>
                <Route path="/upload" exact> 
                    <Upload />
                </Route>
                <Route path="/vid/:id" exact>
                    <Vid />
                </Route>
                <Route path="/channeluser/:chanelName" exact> 
                    <OtherChannel />              
                </Route>
                <Route path="/login" exact> 
                     <Login />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/report" exact>
                    <Report />
                </Route>
                <Route path="/search/:q" exact>
                    <SearchView />
                </Route>
                <Route path="/stats" exact>
                    <Stats />
                </Route>
                <Route path="/editvid/:id">
                    <Editvideo />
                </Route>    
            </Switch>
        </Router>
    )
}