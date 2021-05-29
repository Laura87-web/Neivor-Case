import Landing from "./components/Landing"
import MatcherSearch from "./components/MatcherSearch"
import {Route} from "react-router-dom"

export default function App(){
    return(
        <>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={MatcherSearch} />


        </>
    )
}