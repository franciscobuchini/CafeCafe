import Logo from './Assets/Logo.webp'
export default function Header () {
  return (
    <header>
      <img src={Logo}/>
      <nav className='Nav'>
        <li>
          <ul><a>Food</a></ul>
          <ul><a>Hot Drinks</a></ul>
          <ul><a>Cold Drinks</a></ul>
          <ul><a>Takeaway</a></ul>
        </li>
      </nav>
      <div>
        <p>Website created by </p>
        <a id='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}