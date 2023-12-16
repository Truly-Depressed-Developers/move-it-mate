"use client"

import "./style.scss"
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from 'next/image'
import Button from '@mui/material/Button'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Swipe() {
    const x = useMotionValue(0);
    const scale = useTransform(x, [-80, 80], [1.0, 1.0]);
    const rotate = useTransform(x, [-80, 80], [-5, 5]);

    return (
        <div id="swipe">
            <div id="inner">
                <div id="colors">
                    <div id="no"></div>
                    <div id="yes"></div>
                </div>
                <motion.div
                    id={"drag-box"}
                    style={{
                        x,
                        scale,
                        rotate,
                        width: 380
                    }}
                    onDrag={
                        (event: any) => {
                            let test = document.getElementById("drag-box")
                            let inner = document.getElementById("inner");
                            if (test && inner) {
                                let positionDrag = test.getBoundingClientRect();
                                let positionDragCenter = positionDrag.x + positionDrag.width / 2;
                                let positionInner = inner.getBoundingClientRect()
                                let positionInnerCenter = positionInner.x + positionInner.width / 2;
                                let deviation = positionDragCenter - positionInnerCenter

                                let left = document.getElementById("yes");
                                let right = document.getElementById("no");
                                if (left && right) {
                                    if (deviation < 0) {
                                        right.style.opacity = `${(-deviation / 200) * 100}%`
                                    } else {
                                        left.style.opacity = `${(deviation / 200) * 100}%`
                                    }
                                }

                            }
                        }
                    }
                    drag="x"
                    whileTap={{ cursor: "grabbing" }}
                    dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
                >
                    <Image id="image" src="/spoderman.jpg" alt="" width={380} height={633} draggable="false" />
                    <div id="description">
                        <span>title preferrably two size and long as fuck</span><br />

                        <span id="details">
                            <span>
                                <FmdGoodOutlinedIcon />
                            </span>
                            <span style={{ fontSize: 23 }}>ul. Krakowska 420</span>
                        </span>
                    </div>
                </motion.div>
                <div id="buttons">
                    <Button variant="text" color="primary" id="picture-button">
                        <SettingsOutlinedIcon className="picture-button" />
                    </Button>
                    <Button variant="text" color="primary" id="text-button">
                        <span>Dodaj aktywność</span>
                    </Button>
                    <Button variant="text" color="primary" id="picture-button">
                        <FmdGoodOutlinedIcon className="picture-button" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
