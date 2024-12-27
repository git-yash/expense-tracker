import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const useLogin = () => {
    const loginSchema = z.object({
        email: z.string().email("Invalid email address."),
        password: z.string().min(6, "Password must be at least 6 characters."),
    });

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>): void => {
        console.log("Login Data:", values);
    }

    return { onSubmit, form};
}

export default useLogin;
