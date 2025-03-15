import React from 'react'
import './Navbar.css'
import Sidebar from './Sidebar'

function SinglePostPage() {
  return (
    <>
    <div id="single-top-page">
      {/* heading */}
      <div id="head-top-page">
        <h1 className='md:text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</h1>
        <div id="authors-title-time" className='md:text-lg'>
                    <p>Written by 
                    <span>Jhon Doe</span> </p>
                    <p> on <span>Web design</span> </p>
                    <p>2 days ago</p>
                </div>
      <p className='md:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum nulla delectus hic vero!</p>
      </div>
      {/* image-heading */}
      <div id="image-top-page">
        <img src="./postImg.jpeg" alt="" />
      </div>
    </div>
    <div id="single-bottom-page">
        <div id="bottom-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque cumque illum, voluptates eligendi distinctio asperiores corporis illo recusandae modi laborum. Cum ut, mollitia in nulla distinctio doloremque unde harum laboriosam assumenda odit hic explicabo commodi iusto fuga laborum consequuntur tempora. Exercitationem fugit adipisci nihil in eos natus placeat saepe ipsa vel! Voluptatibus laborum soluta dignissimos unde nobis inventore saepe perspiciatis dolorum non quae voluptate, rem nam. Quaerat, nulla. Magnam fugit ex sunt consequatur corporis, soluta sit officiis enim dicta fugiat delectus quis iure, optio non nam ipsa labore quaerat. Totam eius perspiciatis assumenda. Temporibus impedit hic odio officiis fuga.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus accusamus architecto ab nemo reiciendis iure reprehenderit enim animi velit excepturi quidem dolorem, dolorum ipsum corrupti exercitationem molestias repellendus. Tempora optio provident architecto omnis natus totam ipsa veritatis ex deleniti quam tempore quos rem error, ratione vitae neque vero fugit consequatur debitis similique quis enim. Distinctio ipsa nam itaque architecto odit quaerat, non nobis ullam, natus, impedit dolores earum ipsum voluptatem vitae. Magnam nesciunt tempore quibusdam. Hic corporis ipsum ex totam pariatur impedit nihil reiciendis necessitatibus voluptatum magnam, illo nisi ipsam harum. Numquam dicta at, ducimus laudantium necessitatibus distinctio ullam.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eos ipsam quia voluptates vel culpa harum eius omnis! Magnam omnis et accusantium praesentium eos tempora, dignissimos porro hic consequatur harum iste corrupti sapiente magni autem non odio. Officiis rem non nihil quo recusandae laudantium mollitia quidem, quod est iure expedita.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem beatae tempora sequi iste vel eius, praesentium deserunt explicabo sit optio voluptatum, eaque, delectus voluptatem excepturi qui exercitationem rerum laborum iusto? Sapiente temporibus aliquam dicta consequatur error possimus impedit eos commodi facere delectus fugiat, molestiae sequi nemo velit. Inventore molestiae doloribus accusantium hic voluptate modi magnam. Excepturi incidunt, dolor sequi, quasi animi earum expedita tempora nisi et numquam fugiat nihil adipisci voluptatum dolorem consequuntur ad ipsam ratione molestias vero pariatur praesentium facere ipsa quod? Dignissimos nisi omnis nobis quos quasi quam tempora repellat cumque maxime, eius alias? Placeat qui cumque consectetur?</p>
        </div>
        <Sidebar/>
    </div>
    </>
  )
}

export default SinglePostPage