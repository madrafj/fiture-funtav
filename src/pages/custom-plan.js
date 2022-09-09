import { Alert, Card, CardContent, Snackbar, Step, StepLabel, Stepper } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import GridCenter from "../components/grid-center"
import Page from "../components/page"
import QuestionCard from "../components/question-card"
import { selectCustomPlan } from "../store/slices/customPlanSlice"
import { useBoolean, useStepper } from "../utils/hooks"

const questions = [
  {
    index: 1,
    label: 'Budgeting',
    question: 'How much budget do you have?',
    type: 'number'
  },
  {
    index: 2,
    label: 'Transportation Method',
    question: 'What transportations do you want to use?',
    options: ['Train', 'Bus', 'Airplane']
  },
  {
    index: 3,
    label: 'Accomodation',
    question: 'Do you want to stay in Hotel / Lounge?',
    options: ['Hotel', 'Lounge']
  },
  {
    index: 4,
    label: 'Food Reference',
    question: "Do you have any foods reference / foods that you don't want?",
    multiline: true,
    helper: 'You may explain in several lines'
  },
  {
    index: 5,
    label: 'Schedule Thightness',
    question: 'Do you prefer a thight schedule or loose schedule?',
    options: ['Tight', 'Loose']
  },
  {
    index: 6,
    label: 'Tour Focus',
    question: 'Do you want to focus on Culinary / Cultural?',
    options: ['Culinary', 'Cultural']
  },
  {
    index: 7,
    label: 'Number Of Persons',
    question: 'How many people will go with you?',
    type: 'number',
    helper: 'Including yourself'
  },
  {
    index: 8,
    label: 'Medical Records',
    question: 'Do you have any medical records?',
    multiline: true,
    helper: 'You may explain in several lines'
  },
]

const CustomPlan = () => {
  const data = useSelector(selectCustomPlan)
  const [activeStep, setActive] = useStepper(0)
  const [snackIsOpen, setSnack] = useBoolean()
  const [responseEmail, setResEmail] = useState('')
  const navigate = useNavigate()

  const handleNext = () => {
    if (activeStep === questions.length - 1) {
      fetch(
        'https://httpbin.org/post',
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        }
      )
      .then(res => res.json())
      .then(dt => {
        setResEmail(dt.json.customerData.email)
        setSnack.on()
        setTimeout(() => navigate('/', { replace: true }), 5000)
      })
    }
    else {
      setActive.next()
    }
  }

  return (
    <Page>
      <GridCenter>
        <Card>
          <CardContent>
            <Stepper orientation="vertical" activeStep={activeStep}>
              {questions.map((que, _, ques) => (
                <Step key={que.label}>
                  <StepLabel>
                    {que.label}
                  </StepLabel>
                  <QuestionCard
                    quesLength={ques.length}
                    que={que}
                    key={que.index}
                    onNext={handleNext}
                    onPrev={setActive.prev}
                  />
                </Step>
              ))}
            </Stepper>
          </CardContent>
        </Card>
      </GridCenter>
      <Snackbar open={snackIsOpen} onClose={setSnack.off}>
        <Alert severity="success" onClose={setSnack.off} sx={{ p: 4 }}>
          Request has been received. We will send you the quotations after 2-3 hours. Respond will be sent to {responseEmail}.
        </Alert>
      </Snackbar>
    </Page>
  )
}

export default CustomPlan