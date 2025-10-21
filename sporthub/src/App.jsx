import './App.css'
import CategoriesBar from './components/CategoriesBar/CategoriesBar'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import NewsSection from './components/NewsSection/NewsSection'
import bgImage from './assets/background.png'
import FooterSection from './components/FooterSection/FooterSection'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'

function App() {

  return (
    <>
      <Header/>
      <NewsSection
        image={bgImage}
        tag="#ЭКСТРИМ"
        title="Юрий Поклад: «Динамо» как бы начинает работать заново"
      />
      <CategoriesBar/>
      <MainPage/>
      <NewsSection
        image={bgImage}
        tag="#ЭКСТРИМ"
        title="Юрий Поклад: «Динамо» как бы начинает работать заново"
      />
      <FooterSection/>
      <Banner
        image={bgImage}
        title="Экстрим"
        text="Интервью с Юрием Покладом, главным тренером «Динамо» по фрирайду"
      />
      <Footer/>
    </>
  )
}

export default App