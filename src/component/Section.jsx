import React from 'react'
import { motion } from "framer-motion"

const Section = ({
    h3,
    text,
    hasBtn = true,
    btnText,
    imgSrc,
    imgSize,
    backgroundColor,
    headingColor,
    textColor,
    btnBgColor,
    btnColor
}) => {

    const headingOptions = {
        initial: {
            y: "-100%",
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        }
    }
    const textOptions = {
        ...headingOptions,
        transition: {
            delay: 0.3
        }
    }
    const buttonOptions = {
        initial: {
            y: "100%",
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        transition: {
            ease: "easeIn",
            delay: 0.2
        }
    }

    return (
        <section className='section' style={{ backgroundColor }}>
            <div>
                <motion.h3
                    {...headingOptions}
                    data-cursorpointer style={{
                        color: headingColor
                    }}>{h3}</motion.h3>

                <motion.p
                    {...textOptions}
                    data-cursorpointer style={{
                        color: textColor
                    }}>{text}</motion.p>

                {
                    hasBtn &&
                    <motion.button
                        {...buttonOptions}
                        data-cursorpointer style={{
                            color: btnColor,
                            backgroundColor: btnBgColor
                        }}>{btnText}</motion.button>
                }

                <motion.div {...textOptions}>
                    <img src={imgSrc} alt="This is first" style={{
                        width: imgSize
                    }} />
                </motion.div>
            </div>
        </section>
    )
}

export default Section