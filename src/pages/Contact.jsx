import React, {useContext} from 'react'
import { FitloContext } from '../context/FitloContext'

const Contact = () => {
    const {useDocumentTitle} = useContext(FitloContext);
    useDocumentTitle("Contact Us");
  return (
    <section>

    </section>
  )
}

export default Contact