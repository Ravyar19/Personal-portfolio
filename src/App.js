import AboutUs from "./pages/AboutUs"
import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav"
import { Switch, Route, useLocation } from "react-router-dom"
import MyWorks from "./pages/MyWorks"
import Contact from "./pages/Contact"
import SkillDetail from "./components/SkillDetail"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  )
}

export default App
