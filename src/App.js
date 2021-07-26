import AboutUs from "./pages/AboutUs"
import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav"
import { Switch, Route } from "react-router-dom"
import MyWorks from "./pages/MyWorks"
import Contact from "./pages/Contact"
import SkillDetail from "./components/SkillDetail"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <MyWorks />
        </Route>
        <Route path="/work/:id">
          <SkillDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

export default App
