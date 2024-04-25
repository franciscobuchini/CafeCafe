import Logo from './Assets/Logo.webp'
export default function Header () {
  return (
    <header>
      <img src={Logo}/>
      <nav className='Nav'>
        <ul>
          <li><a>Hot Drinks</a></li>
          <li><a>Food</a></li>
          <li><a>Takeaway</a></li>
          <li><a>Cold Drinks</a></li>
          <li><a>Store</a></li>
        </ul>
      </nav>
      <div>
        <p className='CreatedBy'>Created by </p>
        <a className='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}