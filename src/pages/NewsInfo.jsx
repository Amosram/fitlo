import React, { useContext } from 'react'
import { FitloContext } from '../context/FitloContext'
import { useParams } from 'react-router-dom';

const NewsInfo = () => {
  const {useDocumentTitle} = useContext(FitloContext);
  useDocumentTitle(`fitlo | universite`)
  return (
    <section>
      Information
    </section>
  )
}

export default NewsInfo