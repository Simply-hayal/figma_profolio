import Link from "next/link";


export default function Header(data: any ) {
     return (
      <>
      <div className= {`${data.font.className}links-parent`}>
          <ul className="links">
               <li className="links"><Link href="">works</Link></li>
               <li className="links"><Link href="">Blog</Link></li>
               <li className="links"><Link href="">Contact</Link></li>

          </ul>
      </div>
      </>
     );
   }
   