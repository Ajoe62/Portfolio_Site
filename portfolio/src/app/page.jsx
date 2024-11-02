import Home from '../components/Home'
import About from './about/page'
import Contact from './contact/page'
import MyWorks from './myworks/page'


export default function Page() {
  return (
  <main>
      <Home />
      <About />
      <MyWorks />
      <Contact />

    </main>
  )
}