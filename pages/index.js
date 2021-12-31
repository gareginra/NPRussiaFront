import Head from 'next/head'

import Image from 'next/image'
import TopMenu from '../components/home/TopMenu'
import Slider from '../components/home/Slider'
import Menu from '../components/home/Menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <TopMenu/>
    <Slider/>
    <Menu/>
    </div>
  )
}
