import Home from '../components/Home'
import About from './about/page'
import Contact from './contact/page'
import MyWorks from './myworks/page'


export default function Page() {
  return (
  <main>
      {/* BOLD UPDATE: Added id attributes to each section for navigation */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="my-works">
        <MyWorks />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}