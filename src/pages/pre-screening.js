import { Button, Card, CardActions, CardContent, Stack, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Page from "../components/page"
import GridCenter from "../components/grid-center"
import { resetCustomer, selectCustomer, setCustomer } from "../store/slices/customPlanSlice"

const inputs = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    name: 'phone',
    label: 'Phone Number',
    inputProps: {
      pattern: '[0-9]{9,12}',
      title: 'valid phone number without space, eg: 08123456789'
    }
  }
]

const PreScreening = () => {
  const data = useSelector(selectCustomer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e, item) => {
    dispatch(setCustomer({ [item.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.name && data.email && data.phone) {
      navigate('../custom-plan', { replace: true })
    }
    else {
      alert('All field must be filled')
    }
  }
  const handleCancel = () => {
    dispatch(resetCustomer())
    setTimeout(() => navigate('/'), 2500)
  }

  return (
    <Page>
      <GridCenter>
        <Card component="form" onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h5" mb={2}>
              Please fill in the information below !
            </Typography>
            <Typography variant="subtitle1" mb={2}>
              These informations are required for communications and advertising purpose.
            </Typography>
            <Stack spacing={3}>
              {inputs.map((item) => (
                <TextField
                  inputProps={item.inputProps}
                  variant="outlined"
                  key={item.name}
                  label={item.label}
                  type={item.type}
                  value={data[item.name]}
                  onChange={e => handleChange(e, item)}
                />
              ))}
            </Stack>
            </CardContent>
            <CardActions>
              <Stack direction="row" flexGrow={1} justifyContent="flex-end" spacing={4} p={1}>
                <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                <Button variant="contained" color="secondary" type="submit">Submit</Button>
              </Stack>
            </CardActions>
        </Card>
      </GridCenter>
    </Page>
  )
}

export default PreScreening

