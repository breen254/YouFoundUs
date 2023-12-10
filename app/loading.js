"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (

    <motion.div
    initial={{opacity:0, x:20}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:20}}
    transition={{ duration: 0.9, ease: "easeIn" }}
    className="flex items-center justify-center h-screen bg-secondary"
    >
    <div>Loading...</div>
    </motion.div>
    )

  }