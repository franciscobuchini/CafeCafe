import Bento from './Bento'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'
import IB01 from './Assets/IB01.webp'
import IF01 from './Assets/IF01.webp'
import IB02 from './Assets/IB02.webp'
import IB03 from './Assets/IB03.webp'
import IB04 from './Assets/IB04.webp'
import IB05 from './Assets/IB05.webp'
import IB06 from './Assets/IB06.webp'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='3' Bsh='2' Bst='B3' Th='Hot Drinks' IBimg={IB04} Com={Button}/>
      <Bento Bsv='2' Bsh='4' Bst='B3' Th='Takeaway' IBimg={IB05} Com={Button}/>
      <Bento Bsv='1' Bsh='2' Bst='B9' Bbg='transparent' Tp='Branding Designer: Pedro Miguel Xarepe' Tpc='white' Url='https://www.behance.net/gallery/108077185/Caf-Caf-Coffee'/>
      <Bento Bsv='4' Bsh='2' Bst='B2' Th='Store' IBimg={IB02} Com={Button}/>
      <Bento Bsv='3' Bsh='4' IBimg={IB01} IFimg={IF01}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Bbg='roseofsharon' Th='Change theme:' Com={ThemeSwitch}/>
      <Bento Bsv='2' Bsh='4' Bst='B5' Th='Cold Drinks' IBimg={IB03} Com={Button}/>
      <Bento Bsv='2' Bsh='4' Bst='B3' Th='Food' IBimg={IB06} Com={Button}/>
    </main>
    )
  }