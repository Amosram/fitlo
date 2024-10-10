import React, {useContext} from 'react'
import { KnivatContext } from '../context/KnivatContext'

const Contact = () => {
    const {useDocumentTitle} = useContext(KnivatContext);
    useDocumentTitle("Contact KNIVAT");
  return (
    <div>Contact</div>
  )
}

export default Contact