import React, {Component} from 'react'
import CommentApp from '../CommentApp'
import TopNav from '../topnav/topnav'
// import logo from '../../../../public/images/1a81b9aaa3d52367b02b844e6437cf74.jpg'


class Details extends Component {
    
    
    render() {
        return (
           
          <div className ="topdiv">
           <TopNav/>
           <div className="post-about ">
           <div className ="left-nav"></div>
           <h3><a href="">博客的时代正在到来</a></h3>
           <p>
           <p>全世界每天传播的媒体内容，有一半是由6大媒体巨头所控制。其利益驱动、意识形态以及传统的审查制度，使得这些经过严重加工处理的内容已经越来越不适应人们的需求。媒体的工业化，内容出口的工厂化，都在严重影响其发展。<br />比如，以美联社为例，有近4000人专业记者，每天“制造并出厂”2000万字的内容，每天发布在8500多种报纸、杂志和广播中，把读者当作“信息动物”一样。这种大教堂式的模式主导了整个媒体世界。这时，以个人为中心的博客潮流却开始有力冲击传统媒体，尤其是对新闻界多年形成的传统观念和道德规范。</p>
           <p>        这几年，对于所有新闻媒体来说，都品尝到了技术变革的滋味。如今，再没有任何人会否认互联网对媒体带来的革命，但是，好像也没有多少人感知到互联网的神奇：颠覆性的力量似乎并没有来到人间。所有的核心在于时间。对于性急的人来说，时间如同缓慢的河流，对于从容的人来说，时间又是急流。互联网的力量的确还没有充分施展，因为互联网的商业化起始，到今天仅仅才10年；互联网作为一种新的媒体方式，从尝试到今天，也刚刚跨过10年。</p>
           <img src={logo}/>
           <p>        博客最早是由Jorn Barger在1997年12月提出博客这个名称，但是在1998年，互联网上的博客网站却屈指可数。那时，Infosift的编辑Jesse J.Garrett想列举一个博客类似站点的名单，便在互联网上开始了艰难的搜索， 终于在1998年的12月，他的搜集好了部分网站的名单。他把这份名单发给了Cameron Barrett，Cameron觉得这份名单非常有用，就将它在Camworld网站上公布于众。其它的博客站点维护者发现此举后，也纷纷把自己的网址和网站名称、主要特色都发了过来，这个名单也就日渐丰富。到了1999年初，Jesse的“完全博客站点”名单所列的站点已达23个。</p>
           <p>        Blog的技术并不高深，而是尽量简单化，抛弃烦琐的技术细节，采用人性化的技术手段来为人们服务。它的前身是美国User Land软件公司Dave Winer开发出的用于Web内容编辑、管理的脚本工具“User Land Frontier"，它是Blog想法的最初体现。Blog采用XML来描述其内容，用XML-RPC作为不同Blog间交流信息的标准方式。其关键技术还有RSSC(RDF Site Summary,RDF站点摘要)、Track Back等</p>
           <p>        RSS是用于分发Web站点上的内容摘要的一种简单的XML格式。它能够用于共享各种各样的信息，包括简讯、Web站点更新、事件日历、软件更新、特色内容集合和基于Web进行拍卖的商品等。RSS技术最初是Netscape为发送新闻标题而开发的，Dave Winer对其进行了扩展和完善，从而加快了RSS在Blog中的应用。Blog的频率更新的特点也刚好符合RSS的长处，通过这一技术，可以及时向网站读者提供更新的动态。目前，RSS的发展出现了两个分支:RSS1.0和RSS2.0,前者基于RDF，目的在于利用大量的RDF工具和模块;后者则更为紧缩</p>
         
           </p>
           <a href="#">默认分类</a>
            | 1年前发布 | 
            <a href="#">128条评论</a>
           
           </div>
           <CommentApp/>
          </div>
        
        )
    }
}

export default Details