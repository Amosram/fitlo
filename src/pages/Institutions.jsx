import React, {useContext} from 'react'
import { FitloContext } from '../context/FitloContext'

const Institutions = () => {
    const {useDocumentTitle} = useContext(FitloContext);
    useDocumentTitle("All Institutions");
  return (
    <section>
        All institutions
    </section>
  )
}

export default Institutions