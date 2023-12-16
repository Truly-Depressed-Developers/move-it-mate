import Image from 'next/image'
import styles from './page.module.css'
import { redirect } from "next/navigation";
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <span id="home">
      <div id="home-center">
        Move it, Mate!
      </div>
    </span>
  );
}
