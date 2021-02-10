import React from 'react';
import style from '../static/styles/components/Header.module.css';
//栅格化系统
import {Row,Col,Menu,Icon} from 'antd';

const Header=()=>{
    return(
        <div className = {style.header}>
            <Row type = "flex" justify = "center">
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className = {style.header_logo}>从零开始的程序媛</span>
                    <span className = {style.header_txt}>专注前端，准备实习面试ing</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode = "horizontal">
                        <Menu.Item key = 'home'>
                            <a  className ={style.a} href="/">
                            <Icon type = 'home'/>
                            首页
                            </a>
                        </Menu.Item>
                        <Menu.Item key = 'video'>
                            <a className ={style.a} href = '/list'>
                            <Icon type = 'youtube'/>
                            博客
                            </a>
                        </Menu.Item>
                        <Menu.Item key = 'life'>
                            <a className ={style.a}>
                            <Icon href = '/list' type = 'smile'/>
                            项目
                            </a>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;