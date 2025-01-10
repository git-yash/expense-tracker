import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

const useAddExpenseButton = () => {
    const [open, setOpen] = useState<boolean>(false);
    const expenseSchema = z.object({
        name: z.string().nonempty("Name is required"),
        description: z.string().max(500, "Description must be less than 500 characters").optional(),
        amount: z
            .string()
            .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount")
            .transform((value) => parseFloat(value))
            .refine((value) => value > 0 && value <= 100000, {
                message: "Amount must be between $0.01 and $100,000",
            }),
        category: z.string().nonempty("Category is required"),
    });
    const {
        handleSubmit,
        control,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            name: "",
            description: "",
            amount: "",
            category: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log("Expense Data: ", data);
        reset();
        setOpen(false);
    };

    const expenseCategories: string[] = [
        "Housing",
        "Utilities",
        "Groceries",
        "Transportation",
        "Insurance",
        "Healthcare",
        "Debt Payments",
        "Savings",
        "Education",
        "Entertainment",
        "Dining Out",
        "Travel",
        "Personal Care",
        "Clothing",
        "Childcare",
        "Gifts",
        "Subscriptions",
        "Pets",
        "Charity/Donations",
        "Home Maintenance",
        "Electronics",
        "Office Supplies",
        "Fitness/Wellness",
        "Investments",
        "Taxes",
        "Legal Fees",
        "Hobbies",
        "Alcohol",
        "Tobacco",
        "Miscellaneous"
    ];

    return {expenseCategories, open, setOpen, onSubmit, handleSubmit, control, errors};
}

export default useAddExpenseButton;
