import React from 'react'

export default function Bento({ Bsv, Bsh, Bst, Bbg, Lurl, Th, Tp, Thc, Tpc, IBimg, IBalt, IDimg, IDalt, IFimg, IFalt, Com, }) {

  // If background is transparent this means: no interaction if hover the Bento and check Bsh value for Large class.
  let classNameBento = `Bento ${Bbg === "transparent" ? "Transparent" : ""} ${Bst} ${Bsh > 4 ? " Large" : ""}`

  // Open link in new tab if Lurl exists and component is not a button
  let link = Com !== "Button" && Lurl ? () => window.open(Lurl, "_blank") : undefined

  return (
    <section
      className={classNameBento}
      onClick={link}
      style={{
        ...(Bbg && { backgroundColor: `var(--${Bbg})` }),
        gridRow: `span ${Bsv}`,
        gridColumn: `span ${Bsh}`,
        aspectRatio: `${Bsh}/${Bsv}`,
        cursor: link ? 'pointer' : 'auto',
      }}>

      {IBimg && <img className="Image ImageBack" src={IBimg} alt={IBalt}/>}
      {IDimg && <img className="Image ImageDispel" src={IDimg} alt={IDalt}/>}
      {IFimg && <img className="Image ImageFront" src={IFimg} alt={IFalt}/>}


      {(Th || Tp) && (
        <div className="Text" style={{
          height: Com ? 'auto' : '100%',
          width: Com ? 'auto' : '100%',
        }}>
          <h2 style={{ color: `var(--${Thc})` }}>{Th}</h2>
          <p style={{ color: `var(--${Tpc})` }}>{Tp}</p>
        </div>
      )}

      
      {Com && ( // Add the custom component
        <div className='Component'>
          {React.createElement(Com, { Lurl })}
        </div>
      )}
    </section>
  )
}