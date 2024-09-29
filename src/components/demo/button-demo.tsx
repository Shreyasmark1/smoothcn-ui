import { ChevronRight, Loader2, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ButtonDemo = () => {
    return (
        <div className="gap-20 flex flex-col">
            <div>
                <h3>Size</h3>
                <div className="flex gap-3 justify-center items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">Icon</Button>
                </div>
            </div>
            <div>
                <h3>Variants</h3>
                <div className="flex gap-3 justify-center items-center">
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </div>
            <div>
                <h3>Utils</h3>
                <div className="flex gap-3 justify-center items-center">
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
            </div>
        </div>
    );
}

export default ButtonDemo;