import { useState } from 'react'
import IconSwitch from './components/IconSwitch'
import CardView from './components/CardView'
import ListView from './components/ListView'
import products from './components/products'
import './Store.css'

function Store() {
  const [view, setView] = useState('view_module')


  return (
    <>
      <IconSwitch
      icon = {view}
      onSwitch={ e => {setView(e.target.textContent)}}
      />
          {(view === 'view_module') ? <CardView cards = {products} /> : <ListView items = {products}/>}
    </>
  )
}

export default Store
