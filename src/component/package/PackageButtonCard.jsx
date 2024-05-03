import React from 'react'
import {Carr} from './PackageCollection'
import Packagestyle from './Package.module.css'





const ButtonCard = () => {
  return (
    <div className={Packagestyle.buDis}>
    {Carr.map((item, index) => (
      <p key={index} className={Packagestyle.itemBut}>{item}</p>
    ))}
  </div>
  )
}

export default ButtonCard