import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import Projects     from '@/components/Projects'
import Skills       from '@/components/Skills'
{/*import Achievements from '@/components/Achievements'*/}
import Resume       from '@/components/Resume'
import Contact      from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-bg">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      {/*<Achievements />*/}
      <Resume />
      <Contact />
    </main>
  )
}