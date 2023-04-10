
import React from 'react'
import FormModal from '../formModal/Form';
import { Modal } from 'antd';
import {  Document, Page,Text } from '@react-pdf/renderer'


const PdfComponent = ({filterData}) => {
  console.log(filterData,"GGGg")

  return (
    
    <Document file="some.pdf" >
      <Page>
      <Text >
          name:{filterData? filterData[0].name: ""}
      </Text>
      <Text >
          Address:{filterData? filterData[0].address: ""}
      </Text>
      <Text >
          Tags:{filterData? filterData[0].tags?.map(e=>{
            console.log(e,"DFD")
            return<Text>{e}{","}</Text>
          }): ""}
      </Text>
      </Page>
    </Document>
    
  )
}

export default PdfComponent
