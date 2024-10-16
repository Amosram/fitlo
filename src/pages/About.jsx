import React, {useContext} from 'react'
import { FitloContext } from '../context/FitloContext'

const About = () => {
    const {useDocumentTitle} = useContext(FitloContext);
    useDocumentTitle("About KNIVAT");
  return (
    <div>About</div>
  )
}

export default About