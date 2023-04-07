
import React from 'react'
import FormModal from '../formModal/Form';
import { Modal } from 'antd';
import {  Document, Page,Text } from '@react-pdf/renderer'


const PdfComponent = ({id}) => {
    console.log(id,"asaaa")
  return (
    
    <Document file="some.pdf" >
      <Page>
      <Text id='Footnote'>hii\\{id}</Text>
      
      </Page>
    </Document>
    
  )
}

export default PdfComponent
