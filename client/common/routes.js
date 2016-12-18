import urljoin from 'url-join'

import Index from 'container/Index'
import FollowFace from 'container/FollowFace'
import XmasTree from 'container/XmasTree'


const outDayRoutes = () => {

  let output = []

  let container = [
    { name: 'index',       image: null , obj: Index  },
    { name: 'follow face', image: null,  obj: FollowFace, url: '/2016/sketch/followface' },
    { name: 'xmas tree', image: null, obj: XmasTree, url:'/2016/sketch/xmas' }

  ]

  container.forEach( c => {

    let name = String( c.name )
    let imgSrc =  c.image  || 'jpg/temp-sqr.jpg'
    let url = c.url || name.replace(' ', '')

    output.push({
      name: c.name,
      path: url,
      imageSrc: urljoin( '//public', imgSrc ),
      component: c.obj
    })

  })

  console.log('output', output, container)
  return output
}

export default outDayRoutes()
