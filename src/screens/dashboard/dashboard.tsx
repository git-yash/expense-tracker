import {Button} from "@/components/ui/button.tsx";
import useDashboard from "./useDashboard";

export function Dashboard() {
    const {signOut, loading} = useDashboard();

    return (
        <Button onClick={() => signOut()} disabled={loading}>
            Sign Out
        </Button>
    );
}
