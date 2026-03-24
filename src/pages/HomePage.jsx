import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import ArticleList from '../components/ArticleList'
import ProjectList from '../components/ProjectList'
import Links from '../components/Links'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ArticleList />
        <ProjectList />
        <Links />
      </main>
      <Footer />
    </>
  )
}
