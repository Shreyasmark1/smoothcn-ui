import { ChevronRight, Loader2, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ButtonDemo = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            <Button>HI</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
            </Button>
            <Button>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        </div>
    );
}

export default ButtonDemo;