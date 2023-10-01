import React from 'react'

import { ReactComponent as Gol } from './golang.svg'
import { ReactComponent as Sql} from "./mysql.svg";
import { ReactComponent as Pos} from "./postgresql.svg";
import { ReactComponent as  Natv} from "./react-native-1.svg";
import { ReactComponent as Tens} from "./tensorflow.svg";
import { ReactComponent as Reac } from "./react.svg";

const SkillOne = () => {
  return (
    <div className="flex flex-row justify-center">
      <div> 
        <div className=' rounded pt-7 pb-20 pr-2 pl-2 flex-col bg-sky-400 mb-5 mr-3 justify-center items-center  '>
      <Gol className="w-12 h-12"/>
        
        <p className="text-start text-w-[200px]">
            I started learning Golang as it has <br/>
            many functionalities that can be applied <br/>
            in real life situation.Moreover,it is very simple to <br/>
            grasp and understand.
        </p>
    </div>
    <div className='rounded pt-7 pb-20 pr-2 pl-2 flex-col bg-sky-400 mb-5 mr-3 justify-center items-center  '>
      <Sql className="w-12 h-12"/>
        
        <p className="text-start text-w-[200px]">
            I started learning Golang as it has <br/>
            many functionalities that can be applied <br/>
            in real life situation.Moreover, it is very simple to <br/>
            grasp and understand.
        </p>
    </div>
    </div>

      <div>
      <div className='rounded pt-5 pb-8 pr-2 pl-2 flex-col bg-sky-400 mb-5 mr-3 justify-center items-center  '>
      <Natv className="w-12 h-12"/>
        
        <p className="text-start text-w-[200px]">
            I started learning Golang as it has <br/>
            many functionalities that can be applied <br/>
            in real life situation.Moreover, it is very simple to <br/>
            grasp and understand.
        </p>
    </div>
    <div>
      <h1  className=' pt-7 pb-7 pr-2 pl-2 flex-col bg-white mb-5 mr-3 justify-center items-center font-bold text-4xl '>Skills</h1>
    </div>
       
    <div className=' rounded pt-4 pb-8 pr-2 pl-2 flex-col bg-sky-400 mb-5 mr-3 justify-center items-center  '>
      <Tens className="w-12 h-12"/>
        
        <p className="text-start text-w-[200px]">
            I started learning Golang as it has <br/>
            many functionalities that can be applied <br/>
            in real life situation.Moreover, it is very simple to <br/>
            grasp and understand.
        </p>
    </div>
      </div>


      <div> <div className='rounded pt-7 pb-20 pr-2 pl-2 flex-col bg-sky-400 mb-5 mr-3 justify-center items-center  '>
      <Pos className="w-12 h-12"/>
        
        <p className="text-start text-w-[200px]">
            I started learning Golang as it has <br/>
            many functionalities that can be applied <br/>
            in real life situation.Moreover, it is very simple to <br/>
            grasp and understand.
        </p>
    </div>
    <div className='rounded pt-7 pb-20 pr-2 pl-2 flex-col bg-sky-400 mb-5 mr-3 justify-center items-center  '>
      <Reac className="w-12 h-12"/>
        
        <p className="text-start text-w-[200px]">
            I started learning Golang as it has <br/>
            many functionalities that can be applied <br/>
            in real life situation.Moreover, it is very simple to <br/>
            grasp and understand.
        </p>
    </div>

      </div>
   
   

    </div>
   
  )
}

export default SkillOne