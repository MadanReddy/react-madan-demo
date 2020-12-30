import React, { useEffect, useState } from 'react'
import Dropdown from 'react-mui-multiselect-dropdown'
import { Paper, Grid, Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.dark,
    fontSize: '1em'
  },
  checkBox: {
    color: 'Purple'
  }
}))

function DemoDropdown() {
  const [selectedEmployee, setSelectedEmployees] = useState([])
  const [selectedSkills, setSelectedSkills] = useState([])
  const [selectedCities, setSelectedCities] = useState([])

  const [skills, setSkills] = useState([])
  const [employees, setEmployees] = useState([])
  const [cities, setCities] = useState([])

  const populateData = () => {
    const employeesData = [
      { id: 1, name: 'Madan' },
      { id: 2, name: 'Leena' },
      { id: 3, name: 'WebDriver' },
        { id: 4, name: 'Session' },
          { id: 5, name: 'Interview' },

            { id: 7, name: 'Data' },
            { id: 8, name: 'Data2' },
            { id: 9, name: 'Data3' },
            { id: 10, name: 'Data4' },
            { id: 11, name: 'Data5' },
            { id: 12, name: 'Data6' },
            { id: 13, name: 'Data7' },
            { id: 14, name: 'Data8' },
    ]
    employees.forEach((v, i) => {
      v['path'] = `https://source.unsplash.com/random/${i}`
    })

    setEmployees(employeesData)
    const skillsData = [
      { id: 1, name: 'React Js' },
      { id: 2, name: 'Angular' },
      { id: 3, name: 'Node JS' }
    ]

    setSkills(skillsData)
    const SelectedEmp = []
    setSelectedEmployees(SelectedEmp)

    const SelectedSkills = []
    setSelectedSkills(SelectedSkills)

    const cities = [
      { id: 1, city: 'MUMBAI' },
      { id: 2, city: 'PUNE' },
      { id: 3, city: 'NAGPUR' }
    ]

    cities.forEach((v, i) => {
      v['path'] = `https://source.unsplash.com/random/${i}`
    })

    setCities(cities)
  }

  useEffect(() => {
    populateData()
  }, [])

  const classes = useStyles()

  return (
    <>
      <div>
        <Grid container>
          <Grid item  sm={4} xs={10} style={{ margin: 'auto', marginTop: '20vh' }}>
            <Paper style={{ padding: '2em 10px' }}>
              <Typography
                variant='h6'
                style={{ color: 'tomato', marginTop: '1em' }}
              >
                Single Select
              </Typography>
              <Dropdown
                data={employees}
                fullWidth
                searchable
                searchPlaceHolder='search employee...'
                itemId='id'
                itemLabel='name'
                simpleValue
                searchByValue='name'
                itemValue='id'
                title="Select Employee"
                selectedValues={selectedEmployee}
                customStyles={{
                  error: classes.error,
                  checkBox: classes.checkBox
                }}
                errorText='error'
                onItemClick={(records) => {
                  setSelectedEmployees(records)
                }}
                onDeleteItem={(deleted) => {
                  console.log('deleted', deleted)
                }}
              />
              <Typography
                variant='h6'
                style={{ color: 'tomato', marginTop: '1em' }}
              >
                Multi Select
              </Typography>
              <Dropdown
                data={skills}
                fullWidth
                searchable
                searchPlaceHolder='search...'
                itemId='id'
                itemLabel='name'
                multiple
                simpleValue
                imageLabel='path'
                searchByValue='name'
                itemValue='id'
                title="Select Skills"
                selectedValues={selectedSkills}
                customStyles={{
                  error: classes.error,
                  checkBox: classes.checkBox
                }}
                errorText='error'
                onItemClick={(records) => {
                  setSelectedSkills(records)
                }}
                onDeleteItem={(deleted) => {
                  console.log('deleted', deleted)
                }}
              />
              <Typography
                variant='h6'
                style={{ color: 'tomato', marginTop: '1em' }}
              >
                Select with Image
              </Typography>
              <Dropdown
                data={cities}
                fullWidth
                searchable
                searchPlaceHolder='search cities...'
                itemId='id'
                itemLabel='city'
                imageLabel='path'
                title="Select City"
                searchByValue='city'
                showImage
                selectedValues={selectedCities}
                customStyles={{
                  error: classes.error,
                  checkBox: classes.checkBox
                }}
                errorText='error'
                onItemClick={(city) => {
                  setSelectedCities(city)
                }}
                onDeleteItem={(deleted) => {
                  console.log('deleted', deleted)
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Dropdown
