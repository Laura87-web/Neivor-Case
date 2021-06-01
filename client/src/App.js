import Landing from "./components/Landing"
import Home from "./components/Home"
import {Route} from "react-router-dom"

export default function App(){
    return(
        <>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />


        </>
    )
}