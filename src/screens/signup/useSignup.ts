import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const useSignup = () => {
    const signupSchema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters."),
        email: z.string().email("Invalid email address."),
        password: z.string().min(6, "Password must be at least 6 characters."),
    });

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof signupSchema>): void => {
        console.log("Signup Data:", values);
    }

    return {form, onSubmit};
}

export default useSignup;
