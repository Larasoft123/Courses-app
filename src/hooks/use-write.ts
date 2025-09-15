 import { useEffect, useState } from "react"
 
 

interface UseWriteProps {
    words: string[]
    wordDelay?: number
    deleteLetterDelay? : number,
    writeLetterDelay? : number,
}

 export const useWrite = ({words,wordDelay = 2000,deleteLetterDelay= 50,writeLetterDelay = 100}: UseWriteProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

   

    useEffect(() => {
        const currentWord = words[currentWordIndex]
        const shouldDelete = displayText === currentWord && !isDeleting
        const shouldChangeWord = displayText === "" && isDeleting

        if (shouldDelete) {
            setTimeout(() => setIsDeleting(true), wordDelay)
            return
        }

        if (shouldChangeWord) {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
            return
        }

        const timeout = setTimeout(
            () => {
                if (isDeleting) {
                    setDisplayText(currentWord.substring(0, displayText.length - 1))
                } else {
                    setDisplayText(currentWord.substring(0, displayText.length + 1))
                }
            },
            isDeleting ? deleteLetterDelay : writeLetterDelay,
        )

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentWordIndex, words])



    return {displayText}
 }