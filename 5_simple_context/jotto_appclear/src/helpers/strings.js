const languagStrings = {
    en: {
        congrats: 'Congratulations!',
        submit: 'Submit',
        guessPrompt: 'Try guessing secret word!',
        guessInputPlaceholder: 'enter guess',
        guessColumnHeader: 'Guessed Words',
        guessedWords: 'Guesses',
        matchingLetterColumnHeader: "Matching Letters"
    },
    pl: {
        congrats: 'Gratulacje',
        guessPrompt: 'Try guessing secret word!',
        guessInputPlaceholder: 'zgadnij',
        submit: 'Wyślij',
        guessColumnHeader: 'Odgadnięte',
        guessedWords: 'Próby',
        matchingLetterColumnHeader: "Wspólne litery"
    }
}

function getStringByLanguage(languageCode, stringKey, strings=languageStrings){


}

export default  {
    getStringByLanguage
}