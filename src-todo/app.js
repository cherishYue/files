import React,{Component} from "react";
import Input from "./input";
import List from "./list";
import Footer from "./footer";
export default class App extends Component {
    state = {
        data:[
            // {
            //     id: 1,
            //     text: "今天周五",
            //     done: false
            // },{
            //     id: 2,
            //     text: "明天不上班",
            //     done: false
            // },{
            //     id: 3,
            //     text: "准备睡个懒觉",
            //     done: true
            // }
        ]
    }
    //移除数据
    removeDate=(id)=>{
        let {data} = this.state;
        data = data.filter(item=>item.id!=id);//把传进来的id和item.id相同的过滤掉
        this.setState({
            data
        });
    }
    //如果选中状态说明这件事做了
    changeDone = (id,state)=>{
        let {data} = this.state;
        data.forEach(item => {
            if(item.id == id){
                item.done = state;
            }
        });
        this.setState({
            data
        });
    }
    //添加新数据
    addData=(newInfo)=>{
    //    console.log(newInfo);
       let {data} = this.state;
       //let id = data[data.length-1]?data[data.length-1].id+1:0;
       data.push({
            id: Date.now(),
            text: newInfo,
            done: false
       });
       this.setState({
           data
       });
    }
//重新编辑数据
    editDate=(id,val)=>{
        let {data} = this.state;
        data.forEach(item => {
            if(item.id == id){
                item.text = val;
            }
        });
        this.setState({
            data
        });
    }
    //清除已做的数据
    clearDoneData=()=>{
        let {data} = this.state;
        data = data.filter(item=>!item.done);//筛选未完成的
        this.setState({
            data
        });
    }
    render(){
        let {data} = this.state;
        console.log(data)
        return (
            <div id="todoApp">
                <h2 className="title">TodoList</h2>
                <Input parent={this} addData={this.addData} />
                <List 
                    data={data} 
                    removeDate = {this.removeDate}
                    changeDone = {this.changeDone}
                    editDate = {this.editDate}
                />
                {data.length>0?<Footer 
                    data={data} 
                    clearDoneData = {this.clearDoneData}    
                />:""}
            </div>
        );
    }
}