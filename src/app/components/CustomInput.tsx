import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '../utils/utils'


const formSchema = authFormSchema('sign-up');


interface customInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}
function CustomInput({control, name, label, placeholder}:customInput) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="flex flex-col mb-8">
                    <FormItem>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <FormControl >
                        <Input type={name ==='password' ? 'password' : (name === 'dateOfBirth' ? 'date' : "text")} placeholder={placeholder} {...field} className="input-class"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
                </div>
            )}
        />
    )
}

export default CustomInput