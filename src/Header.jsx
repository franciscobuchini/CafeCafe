import Logo from './Assets/Logo.webp'
export default function Header () {
  return (
    <header>
      <img src={Logo}/>
      <nav className='Nav'>
        <li>
          <ul><a>Hot Drinks</a></ul>
          <ul><a>Food</a></ul>
          <ul><a>Takeaway</a></ul>
          <ul><a>Cold Drinks</a></ul>
        </li>
      </nav>
      <div>
        <p>Created by </p>
        <a className='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}