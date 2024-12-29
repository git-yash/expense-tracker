import {useNavigate} from "react-router-dom";
import DashboardService from "@/screens/dashboard/Dashboard.service.ts";
import ScreenConstants from "@/screens/ScreenConstants.ts";
import {useState} from "react";

const useDashboard = () => {
    const navigate = useNavigate();
    const dashboardService = new DashboardService();
    const [loading, setIsLoading] = useState<boolean>(false);

    const signOut = () => {
        setIsLoading(true);

        dashboardService.signOut().then(() => {
            navigate(ScreenConstants.LOGIN);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return {signOut, loading};
}

export default useDashboard;
