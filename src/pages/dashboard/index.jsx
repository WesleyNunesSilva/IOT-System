import { useState, useEffect } from "react";
import axios from "axios";

import { Aside, Container, Main, Element, ContentElement} from "./styles";
import { IoIosArrowDown} from 'react-icons/io'
import { AiOutlineExclamation } from  'react-icons/ai'

import { Header } from "../../components/header";
import { MyLineChart } from "../../components/chart";
import { ProgressBar } from "../../components/progressbar";

export function DashBoard() {
  const measure = 40

  const completedPercentage = Math.round(4 *10)

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(`http://localhost:3000/clients/1/dashboard`)
        console.log(response)
        //setMachineList(machine.data.data)
  
      } catch (error) {
        console.log(error)
        console.log(error.response)
      }      
    }
      fetchData()
  },[])

    return(
        <Container>
          <Header />
            <div className="select-user">
                <IoIosArrowDown size={25}/>
                <select name="clients" id="clients">
                    <option value=""></option>
                    <option value="clients">numero 1</option>
                    <option value="clients">Unimagem - Estrela (RS) </option>
                </select>
            </div>
          <Main>
            
            <MyLineChart />
            
            <Aside>
              <ContentElement low ='true'>
                
                <Element low ='true'>
                  <h3 className="helio ">He</h3>
                  <span >
                    <AiOutlineExclamation size={20} />
                  </span>
                </Element>
                <span>Hélio</span>

                <div className="measure" >
                  <span>Medição atual</span>
                  <span>40%</span>

                </div>

                <ProgressBar progress = {completedPercentage} />
              </ContentElement>

              <ContentElement >
                <Element >
                  <h3 className="cht " >CHT</h3>  
                  <span >
                    <AiOutlineExclamation size={20} />
                  </span>
                </Element>
                <span>ColdHead</span>

                <div className="measure">
                  <span>Medição atual</span>
                  <span>40%</span>

                </div>

                <ProgressBar progress = {completedPercentage} />
              </ContentElement>
              
            </Aside>

          </Main>

        </Container>
    )
}