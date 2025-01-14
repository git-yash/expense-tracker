import {Controller} from "react-hook-form";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.tsx"; // Import Dialog components
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import useAddExpenseButton from "@/components/customComponents/AddExpenseButton/useAddExpenseButton.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import {DatePicker} from "@/components/customComponents/DatePicker.tsx";

export function AddExpenseButton() {
    const {expenseCategories, open, setOpen, onSubmit, handleSubmit, control, errors} = useAddExpenseButton();

    return (
        <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
            <DialogTrigger asChild>
                <Button className="bg-black text-white p-2 pl-3 pr-3 rounded-md m-3">
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg w-full invisible">
                <Card className="w-full visible bg-white rounded-lg">
                    <CardHeader>
                        <CardTitle>Create Expense</CardTitle>
                        <CardDescription>Add your expenses for today!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({field}) => (
                                            <Input
                                                id="name"
                                                placeholder="Name of your expense"
                                                {...field}
                                                className={errors.name ? "border-red-500" : ""}
                                            />
                                        )}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Controller
                                        name="description"
                                        control={control}
                                        render={({field}) => (
                                            <Textarea
                                                id="description"
                                                placeholder="Enter your description"
                                                {...field}
                                                className={errors.description ? "border-red-500" : ""}
                                            />
                                        )}
                                    />
                                    {errors.description && (
                                        <p className="text-red-500 text-sm">{errors.description.message}</p>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="amount">Amount</Label>
                                    <Controller
                                        name="amount"
                                        control={control}
                                        render={({field}) => (
                                            <Input
                                                id="amount"
                                                placeholder="$XX.XX"
                                                {...field}
                                                className={errors.amount ? "border-red-500" : ""}
                                            />
                                        )}
                                    />
                                    {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="category">Category</Label>
                                    <Controller
                                        name="category"
                                        control={control}
                                        render={({field}) => (
                                            <Select {...field} onValueChange={field.onChange}>
                                                <SelectTrigger id="category">
                                                    <SelectValue placeholder="Select"/>
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    {expenseCategories.map((category) => (
                                                        <SelectItem key={category} value={category}>
                                                            {category}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.category &&
                                        <p className="text-red-500 text-sm">{errors.category.message}</p>}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="date">Date</Label>
                                    <Controller
                                        name="date"
                                        control={control}
                                        render={({field}) => (
                                            <DatePicker
                                                {...field}
                                                onChange={(value) => field.onChange(value)}
                                                value={field.value}
                                                className={errors.date ? "border-red-500" : ""}
                                            />
                                        )}
                                    />
                                    {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                                </div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">Add</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    );
}
