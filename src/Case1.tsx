import { useState } from "react"

const Document = ({title, onClickHandler}: {title: string, onClickHandler: (title:string) => void}) => {

    return (
        <div onClick={() => onClickHandler(title)} className="document">
            <h3>{title}</h3>
        </div>
    )
}

const CORRECT_ANSWERS = ['Daily mail (Correct)', 'Toilet paper (Correct)']

const Case1 = () => {
    const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
    const [submissionResult, setSubmissionResult]= useState<string | null>(null);
   return ( <div>
        <h1>Hey select some documents</h1>
        <Document title="Daily mail (Correct)" onClickHandler={(title: string) => {setSelectedDocuments([...selectedDocuments, title])}} />
        <Document title="Ya mum" onClickHandler={(title: string) => {setSelectedDocuments([...selectedDocuments, title])}} />
        <Document title="Toilet paper (Correct)" onClickHandler={(title: string) => {setSelectedDocuments([...selectedDocuments, title])}} />
        <Document title="The guardian"onClickHandler={(title: string) => {setSelectedDocuments([...selectedDocuments, title])}} />
        {
            !!submissionResult && (<div>
                <h2>
                    {submissionResult}
                </h2>
            </div>)
        }
        <button onClick={() => {
            const correctSelectedDocuments = selectedDocuments.map(selectedDocument => CORRECT_ANSWERS.includes(selectedDocument)).filter(x => x)
            if (correctSelectedDocuments.length === CORRECT_ANSWERS.length) {
                setSubmissionResult('Congrats you got it all right!')
            } else if (correctSelectedDocuments.length === 1) {
                setSubmissionResult('You only got 1 correct')
            } else {
                setSubmissionResult('You got nothing right!')
            }

        }}>Submit evidence</button>
    </div>
    )
}
    

export default Case1;