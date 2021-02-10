import style from '../static/styles/components/Author.module.css';
import {Avatar,Divider} from 'antd';

const Author = () =>{
    return(
        <div className = {style.author_div}>
            <div><Avatar size={100} src="../author.png"></Avatar></div>
            <div className = {style.author_introduction}>
                计算机基础扎实，熟悉HTML,CSS,JS,使用react技术栈。
                <Divider>社交帐号</Divider>
                <Avatar size={28} icon = "github" className = {style.account}/>
                <Avatar size={28} icon = "qq" className = {style.account}/>
                <Avatar size={28} icon = "wechat" className = {style.account}/>
            </div>
        </div>
    )
}
export default Author;