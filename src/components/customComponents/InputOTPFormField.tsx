import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {ErrorMessage} from "@/components/customComponents/error-message.tsx";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.tsx";
import {REGEXP_ONLY_DIGITS} from "input-otp";

export function InputOTPFormField(props: {
    form: any,
    error: string | undefined,
    label: string,
    description: string,
    name: string
}) {
    return (
        <FormField
            control={props.form.control}
            name={props.name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <ErrorMessage error={props.error}/>
                    <FormControl>
                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0}/>
                                <InputOTPSlot index={1}/>
                                <InputOTPSlot index={2}/>
                                <InputOTPSlot index={3}/>
                                <InputOTPSlot index={4}/>
                                <InputOTPSlot index={5}/>
                            </InputOTPGroup>
                        </InputOTP>
                    </FormControl>
                    <FormDescription>{props.description}</FormDescription>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}
