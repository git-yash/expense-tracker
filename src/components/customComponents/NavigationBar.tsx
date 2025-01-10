import {Button} from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {DropdownMenuItem} from "@radix-ui/react-dropdown-menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export function NavigationBar(props: { signOut?: () => void, loading: boolean }) {
    return (
        <nav className="flex justify-between p-4 items-center bg-black text-white shadow-lg">
            {/* Left Label */}
            <div className="text-xl font-semibold">
                Budget Buddy
            </div>

            {/* Right Dropdown Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="text-white focus:ring-2">
                        <FontAwesomeIcon icon={faBars}/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 shadow-md hover:shadow-lg">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <Button onClick={props.signOut}
                                className="bg-white text-red-500 shadow-none w-full hover:bg-gray-100">
                            {props.loading ? "Logging out..." : "Log out"}
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
}
