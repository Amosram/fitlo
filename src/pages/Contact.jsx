import React, {useContext} from 'react'
import { FitloContext } from '../context/FitloContext'

const Contact = () => {
    const {useDocumentTitle} = useContext(FitloContext);
    useDocumentTitle("Contact KNIVAT");
  return (
    <div>Contact</div>
  )
}

export default Contact