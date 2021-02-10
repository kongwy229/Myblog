import React ,{useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header';
import Author from '../components/Author';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import {Row,Col,Breadcrumb,Icon,Affix} from 'antd'
import style from '../static/styles/pages/detailed.module.css';

const Detailed = () => {
  let markdown='\n# p02:来个Hello World 初始Vue3.0\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '```js\n var a=11; \n```'

  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header></Header>
      <Row className = "comm-main" type = 'flex' justify = 'center'> 
        <Col className = 'comm-left' xs={24} sm={24} md={10} lg={15} xl={12}>
          <div>
          <div className ={style.bread_div}>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/list">视频列表</a></Breadcrumb.Item>
                <Breadcrumb.Item>详情页</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className ={style.detailed_title ,style.center}>这是第一篇博客</div>
                <div className ="list-icon">
                  <span><Icon type = "calender"/>2021-2-11</span>
                  <span><Icon type = "folder"/>面试</span>
                  <span><Icon type = "fire"/>20</span>
                </div>
                <div className ={style.detailed_content}>
                  <ReactMarkdown
                    source = {markdown}
                    escapeHtml = {false}
                  />
                </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Affix offsetTop = {5}>
              <div className={style.comm_box}>
                  <div className={style.nav_title}>文章目录</div>
                    <MarkNav
                      className="article-menu"
                      source={markdown}
                      ordered={false}
                    />
              </div>
          </Affix>
        </Col>  
      </Row>
      <Footer></Footer>
   </>
  )
}


export default Detailed;