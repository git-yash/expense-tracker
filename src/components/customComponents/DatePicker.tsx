"use client";

import * as React from "react";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

interface DatePickerProps {
    value?: Date | null;
    onChange?: (date: Date | undefined) => void;
    className?: string;
}

export function DatePicker({value, onChange, className}: DatePickerProps) {
    const [internalDate, setInternalDate] = React.useState<Date | undefined>(value || undefined);

    const handleSelect = (date: Date | undefined) => {
        setInternalDate(date);
        if (onChange) {
            onChange(date);
        }
    };

    React.useEffect(() => {
        setInternalDate(value || undefined);
    }, [value]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !internalDate && "text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4"/>
                    {internalDate ? format(internalDate, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={internalDate}
                    onSelect={handleSelect}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
