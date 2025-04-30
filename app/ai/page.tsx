"use client"

import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion';




export default function ai() {

    const isMobile = useMediaQuery({ maxWidth: 767 })

    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 100) // Delay dikit buat kesan dramatis
        return () => clearTimeout(timeout)
    }, [])

    const [isListening, setIsListening] = useState(false)
    const [transcript, setTranscript] = useState('')
    const [response, setResponse] = useState('')
    const recognitionRef = useRef<SpeechRecognition | null>(null)

    const startListening = () => {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.lang = 'id-ID' // atau 'en-US'
        recognition.interimResults = false
        recognition.maxAlternatives = 1

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const speech = event.results[0][0].transcript
            setTranscript(speech)
            getAIResponse(speech)
        }

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error:', event.error)
        }

        recognitionRef.current = recognition
        recognition.start()
        setIsListening(true)
    }

    const stopListening = () => {
        recognitionRef.current?.stop()
        setIsListening(false)
    }

    const getAIResponse = async (message: string) => {
        try {
            const res = await axios.post('/api/chat', { message })
            const reply = res.data.reply
            setResponse(reply)
            speak(reply)
        } catch (err) {
            console.error('Error getting AI response:', err)
        }
    }

    const speak = async (text: string) => {
        const res = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        })

        const blob = await res.blob()
        const audio = new Audio(URL.createObjectURL(blob))
        audio.play()
    }

    return (

        <BackgroundGradientAnimation>
            <main className="absolute inset-0 flex items-center justify-center z-10 px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                    {show && (
                        <motion.h1
                            initial={isMobile ? { y: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex flex-row items-center justify-center md:justify-start text-4xl font-bold tracking-tighter text-right md:text-left md:text-5xl lg:text-7xl"
                        >
                            <span className="mr-2">{'AI'}</span>
                            <span><AuroraText>Psikolog</AuroraText></span>
                        </motion.h1>








                    )}

                    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-lg p-10 max-w-md w-full text-white">
                        <h1 className="text-3xl font-bold mb-6 text-center">Tell your story!/h1>
                        <button
                            onClick={isListening ? stopListening : startListening}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md mb-6 w-full"
                        >
                            {isListening ? 'Stop' : 'Start'} Start Conversation
                        </button>
                        <div className="text-left space-y-2">
                            <p><strong>Transkripsi:</strong> {transcript}</p>
                            <p><strong>Respon AI:</strong> {response}</p>
                        </div>
                    </div>
                </div>
            </main>
        </BackgroundGradientAnimation>





    );
}
