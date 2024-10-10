import React, {useContext} from 'react'
import { KnivatContext } from '../context/KnivatContext'

const About = () => {
    const {useDocumentTitle} = useContext(KnivatContext);
    useDocumentTitle("About KNIVAT");
  return (
    <div>About</div>
  )
}

export default About