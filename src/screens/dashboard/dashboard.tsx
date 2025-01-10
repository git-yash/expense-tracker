import useDashboard from "./useDashboard";
import {NavigationBar} from "@/components/customComponents/NavigationBar.tsx";

export function Dashboard() {
    const {signOut, loading} = useDashboard();

    return (
        <div className={'flex-1'}>
            <NavigationBar signOut={signOut} loading={loading}/>
        </div>
    );
}
