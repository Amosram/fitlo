import React, {useContext} from 'react'
import { FitloContext } from '../context/FitloContext'

const News = () => {
    const {useDocumentTitle} = useContext(FitloContext);
    useDocumentTitle("About Fitlo");
  return (
    <section>
        News
    </section>
  )
}

export default News