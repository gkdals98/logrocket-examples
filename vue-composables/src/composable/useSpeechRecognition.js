import { ref, watch } from 'vue'

export function useSpeechRecognition({lang, continuous,interimResults}) {
    const isListening = ref(false)
    const isFinal = ref(false)
    const result = ref('')
    const error = ref('')

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition
    const isSupported = Boolean(SpeechRecognition)
    const recognition = SpeechRecognition? new SpeechRecognition() : false

    const start = () => {
        isListening.value = true
    }

    const stop = () => {
        isListening.value = false
    }

    if (isSupported) {
        recognition.continuous = continuous
        recognition.interimResults = interimResults
        recognition.lang = lang

        recognition.onstart = () => {
            isFinal.value = false
        }

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map((result) => {
                    isFinal.value = result.isFinal;
                    return result[0]
                })
                .map(result => result.transcript)
                .join('')
            result.value = transcript
            error.value = undefined
        }

        recognition.onerror = (event) => {
            error.value = 'Speech recognition error detected: ' + event.error
        }

        recognition.onend = () => {
            isListening.value = false
        }

        watch(isListening, () => {
            if(isListening.value){
                recognition.start()
            }else {
                recognition.stop()
            }
        })
    }

    return {
        isSupported,
        isListening,
        isFinal,
        recognition,
        result,
        error,
        start,
        stop,
    }
}