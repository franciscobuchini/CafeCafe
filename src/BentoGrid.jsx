import Bento from './Bento'
import Switch from './Components/Switch'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'
import CafeCafe01 from './Assets/CafeCafe01.webp'
import CafeCafe02 from './Assets/CafeCafe02.webp'
import CafeCafe03 from './Assets/CafeCafe03.webp'
import CafeCafe04 from './Assets/CafeCafe04.webp'
import CafeCafe05 from './Assets/CafeCafe05.webp'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='3' Bsh='2' Bst='B3' Th='Hot Drinks' IBimg={CafeCafe03} Com={Button}/>
      <Bento Bsv='2' Bsh='4' Bst='B3' Th='Takeaway' IBimg={CafeCafe04} Com={Button}/>
      <Bento Bsv='1' Bsh='2' Bst='B4' Bbg='transparent' Tp='Branding Designer: Pedro Miguel Xarepe' Thc='christine' Tpc='white' Url='https://www.behance.net/gallery/108077185/Caf-Caf-Coffee'/>
      <Bento Bsv='2' Bsh='2' Bbg='roseofsharon'/>
      <Bento Bsv='3' Bsh='4' IBimg={CafeCafe01}/>
      <Bento Bsv='2' Bsh='2' Bbg='roseofsharon'/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Change theme:' Com={ThemeSwitch}/>
      <Bento Bsv='2' Bsh='4' Bst='B2' Th='Cold Drinks' IBimg={CafeCafe02} Com={Button}/>
      <Bento Bsv='2' Bsh='4' Bst='B3' Th='Food' IBimg={CafeCafe05} Com={Button}/>
    </main>
    )
  }

{/*
Bsv: Bento - Size Vertical
Bsh: Bento - Size Horizontal
Bfd: Bento - Flex Direction
Bjc: Bento - Justify Content
Bbg: Bento - Background Color
Burl: Bento - Link

Th: Text - <H2>
Tp: Text - <P>
Tjc: Text - Justify Content
Tta: Text - Text Align
Thc: Text - <H2> Color
Tpc: Text - <P> Color

Iimg: Image - Image
Ialt: Image - Alt

Com: Component
Cjc: Component - Justify Content
*/}