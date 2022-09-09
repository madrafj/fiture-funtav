import { Button, MenuItem, Stack, StepContent, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { selectPreferences, setPreferences } from "../store/slices/customPlanSlice"
import { camelCase } from "../utils/utils"

const QuestionCard = ({ que, onNext, onPrev, quesLength }) => {
  const data = useSelector(selectPreferences)
  const dispatch = useDispatch()
  const labelIndex = camelCase(que.label)

  const handleChange = (e, item) => {
    dispatch(setPreferences({ [item]: e.target.value }))
    console.log(item)
  }

  return (
    <StepContent>
      <Stack alignItems="center" justifyContent="center" spacing={2} minHeight="40vh">
        <Typography variant="h6">
          {que.question}
        </Typography>
        <TextField
          hiddenLabel
          autoFocus
          value={data[labelIndex]}
          onChange={e => handleChange(e, labelIndex)}
          multiline={que.multiline}
          select={que.options?.length > 0}
          helperText={que.helper}
          type={que.type}
          inputProps={{
            min: que.type === 'number' ? 0 : undefined
          }}
          sx={{ minWidth: '256px' }}
        >
          {que.options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Stack direction="row" spacing={4} justifyContent="flex-end">
          <Button
            onClick={onPrev}
            disabled={que.index === 1}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={onNext}
            disabled={data[labelIndex] <= 0 || data[labelIndex] === ''}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </StepContent>
  )
}

export default QuestionCard