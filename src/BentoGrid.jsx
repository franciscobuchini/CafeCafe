import Bento from './Bento'
import Switch from './Components/Switch'
import Button from './Components/Button'
import CafeCafe01 from './Assets/CafeCafe01.webp'
import CafeCafe02 from './Assets/CafeCafe02.webp'
import CafeCafe03 from './Assets/CafeCafe03.webp'
import CafeCafe04 from './Assets/CafeCafe04.webp'
import CafeCafe05 from './Assets/CafeCafe05.webp'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='3' Bsh='2' Bfd='column' Bjc='space-between' Th='Hot Drinks' Tta='left'  Iimg={CafeCafe03} Com={Button} Cjc='left'/>
      <Bento Bsv='2' Bsh='4' Bbg='roseofsharon' Tpc='white' Tta='center' Tjc='center' />
      <Bento Bsv='4' Bsh='2' Bfd='column' Bjc='space-between' Th='Takeaway' Tta='left'  Iimg={CafeCafe04} Com={Button} Cjc='right'/>
      <Bento Bsv='3' Bsh='4' Iimg={CafeCafe01}/>
      <Bento Bsv='2' Bsh='2'/>
      <Bento Bsv='2' Bsh='4' Bfd='column' Bjc='space-between' Iimg={CafeCafe02} Th='Cold Drinks' Com={Button} Cjc='left'/>
      <Bento Bsv='2' Bsh='4' Bfd='column' Bjc='space-between' Th='Food' Tta='left' Iimg={CafeCafe05} Com={Button} Cjc='right'/>
      <Bento Bsv='1' Bsh='2' Bbg='transparent' Bfd='column' Bjc='center' Tp='Branding: Pedro Miguel Xarepe' Thc='christine' Tjc='start' Tta='left' Tpc='white' url='https://www.behance.net/gallery/108077185/Caf-Caf-Coffee' Com={Button} Cjc='left'/>
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