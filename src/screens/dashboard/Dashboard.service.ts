import {signOut} from 'aws-amplify/auth';

export default class DashboardService {
    async signOut() {
        return await signOut({
            global: true
        }).catch((err) => {
            throw err;
        })
    }
}
