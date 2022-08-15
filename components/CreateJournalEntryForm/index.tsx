import { Textarea, TextInput, Button, Center } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";


const VALIDATION_SCHEMA = z.object({
  name: z.string(),
  bar: z.string().min(2).refine(val => val !== 'foo', { message: 'value cannot be foo' }),
})

function CreateJournalEntryForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(VALIDATION_SCHEMA) })
  const onSubmit = (data: Record<string, unknown>) => console.log('got data', data)

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextInput
            label="Character"
            error={errors.character?.message}
            {...register('character')}
          />

          <TextInput
            label="Title"
            error={errors.title?.message}
            {...register('title')}
          />

          <Textarea
            autosize
            error={errors.entry?.message}
            label="Journal Entry"
            minRows={4}
            {...register('entry')}
          />

          <DatePicker placeholder="Log date" label="Log date" required/>
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Center>
  )
}

export default CreateJournalEntryForm
