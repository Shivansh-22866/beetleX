import React, { useState } from 'react'
import { useCreateRegistration } from '../hooks/useRegistrations';
import type { Registration } from '../../types/Registration';

const RegistrationPage = () => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<any>({
    college: "",
    team_name: "",
    track_id: ""
  })

  const registration = useCreateRegistration()

  const handleSubmit = async () => {
    try {
      await registration.mutateAsync(formData)
    }

    catch(err) {
      console.error(err)
    }
  }

  return (
    <div>RegistrationPage</div>
  )
}

export default RegistrationPage