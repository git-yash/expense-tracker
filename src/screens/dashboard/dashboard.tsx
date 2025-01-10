import useDashboard from "./useDashboard";
import {NavigationBar} from "@/components/customComponents/NavigationBar.tsx";
import {AddExpenseButton} from "@/components/customComponents/AddExpenseButton/AddExpenseButton.tsx";

export function Dashboard() {
    const {signOut, loading} = useDashboard();

    return (
        <div className="flex-1">
            <NavigationBar signOut={signOut} loading={loading}/>
            <AddExpenseButton/>
        </div>
    );
}
