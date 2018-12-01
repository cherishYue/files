import React from "react";
export default function Footer(props){
    let {data,clearDoneData} = props;
    let todo = data.filter(item=>!item.done);//filter 返回的是ture,这里是筛选未完成的
    let done = data.filter(item=>item.done);
    return (
        <footer className="footer">
            <p>待办{todo.length}项事情</p>
            {done.length>0
                ? 
                <a 
                    href="javascript:;"
                    onClick = {()=>{
                        clearDoneData();
                    }}
                >清除已完成的{done.length}项事情</a>:""}
           
        </footer>
    );
}