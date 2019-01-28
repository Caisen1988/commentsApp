import React, {Component} from 'react'
import CommentApp from '../CommentApp'
import TopNav from '../topnav/topnav'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import leftlogo from '../static/left-logo.jpg'
import logo from '../static/avatar.png'


class List extends Component {
    
    
    
    render() {
        return (
           
          <div className ="topdiv">
           <TopNav/>
           <div className="post-about-list">
           
           <div className="leftlogo">
          
         <div className="avatar-div">
         <img className = "avatar" src={logo}/>
         </div>
          <h3>kyrie的博客 </h3>
          <ul className="nav">
        <li><a href="/blog.html" className="active"><span className="icon-home hidden-l"></span>首页</a></li>
        <li><a href="/blog/p/1.html"><span className="icon-user hidden-l"></span>关于我</a></li>
        <li><a href="/blog/archieve.html"><span className="icon-list hidden-l"></span>归档</a></li>
           </ul>
       

           </div>
           <div className="content-list">
           <h3><a href=""><NavLink  to="/detail">博客的时代正在到来</NavLink> </a></h3>
           <p> 
           <p>全世界每天传播的媒体内容，有一半是由6大媒体巨头所控制。其利益驱动、意识形态以及传统的审查制度，使得这些经过严重加工处理的内容已经越来越不适应人们的需求。媒体的工业化，内容出口的工厂化，都在严重影响其发展。<br />比如，以美联社为例，有近4000人专业记者，每天“制造并出厂”2000万字的内容，每天发布在8500多种报纸、杂志和广播中，把读者当作“信息动物”一样。这种大教堂式的模式主导了整个媒体世界。这时，以个人为中心的博客潮流却开始有力冲击传统媒体，尤其是对新闻界多年形成的传统观念和道德规范。</p>
           </p>
           <a href="#">默认分类</a>
            | 1年前发布 | 
            <a href="#">128条评论</a>

            <h3><a href=""><NavLink  to="/detail">博客的崛起</NavLink> </a></h3>
           <p> 
           <p>全世界每天传播的媒体内容，有一半是由6大媒体巨头所控制。其利益驱动、意识形态以及传统的审查制度，使得这些经过严重加工处理的内容已经越来越不适应人们的需求。媒体的工业化，内容出口的工厂化，都在严重影响其发展。<br />比如，以美联社为例，有近4000人专业记者，每天“制造并出厂”2000万字的内容，每天发布在8500多种报纸、杂志和广播中，把读者当作“信息动物”一样。这种大教堂式的模式主导了整个媒体世界。这时，以个人为中心的博客潮流却开始有力冲击传统媒体，尤其是对新闻界多年形成的传统观念和道德规范。</p>
           </p>
           <a href="/blog/c/1.html">默认分类</a>
            | 1年前发布 | 
            <a href="/blog/p/4.html#comments">128条评论</a>

           <h3><a href=""><NavLink  to="/detail">博客的来源</NavLink></a></h3>
           <p> 
           <p>全世界每天传播的媒体内容，有一半是由6大媒体巨头所控制。其利益驱动、意识形态以及传统的审查制度，使得这些经过严重加工处理的内容已经越来越不适应人们的需求。媒体的工业化，内容出口的工厂化，都在严重影响其发展。<br />比如，以美联社为例，有近4000人专业记者，每天“制造并出厂”2000万字的内容，每天发布在8500多种报纸、杂志和广播中，把读者当作“信息动物”一样。这种大教堂式的模式主导了整个媒体世界。这时，以个人为中心的博客潮流却开始有力冲击传统媒体，尤其是对新闻界多年形成的传统观念和道德规范。</p>
           </p>
           <a href="/blog/c/1.html">默认分类</a>
            | 1年前发布 | 
            <a href="/blog/p/4.html#comments">128条评论</a>

            <h3><a href=""><NavLink  to="/detail">如何写博客</NavLink></a></h3>
           <p> 
           <p>全世界每天传播的媒体内容，有一半是由6大媒体巨头所控制。其利益驱动、意识形态以及传统的审查制度，使得这些经过严重加工处理的内容已经越来越不适应人们的需求。媒体的工业化，内容出口的工厂化，都在严重影响其发展。<br />比如，以美联社为例，有近4000人专业记者，每天“制造并出厂”2000万字的内容，每天发布在8500多种报纸、杂志和广播中，把读者当作“信息动物”一样。这种大教堂式的模式主导了整个媒体世界。这时，以个人为中心的博客潮流却开始有力冲击传统媒体，尤其是对新闻界多年形成的传统观念和道德规范。</p>
           </p>
           <a href="/blog/c/1.html">默认分类</a>
            | 1年前发布 | 
            <a href="/blog/p/4.html#comments">128条评论</a>

             <h3><a href=""><NavLink  to="/detail">如何写出好的博客</NavLink></a></h3>
           <p> 
           <p>全世界每天传播的媒体内容，有一半是由6大媒体巨头所控制。其利益驱动、意识形态以及传统的审查制度，使得这些经过严重加工处理的内容已经越来越不适应人们的需求。媒体的工业化，内容出口的工厂化，都在严重影响其发展。<br />比如，以美联社为例，有近4000人专业记者，每天“制造并出厂”2000万字的内容，每天发布在8500多种报纸、杂志和广播中，把读者当作“信息动物”一样。这种大教堂式的模式主导了整个媒体世界。这时，以个人为中心的博客潮流却开始有力冲击传统媒体，尤其是对新闻界多年形成的传统观念和道德规范。</p>
           </p>
           <a href="/blog/c/1.html">默认分类</a>
            | 1年前发布 | 
            <a href="/blog/p/4.html#comments">128条评论</a>


           </div>
           </div>
          </div>
        
        )
    }
}

export default List