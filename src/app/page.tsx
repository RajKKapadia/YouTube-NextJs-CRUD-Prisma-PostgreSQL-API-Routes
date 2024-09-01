import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
    return (
        <div className="container mx-auto py-10">
            <div className=" flex gap-4 items-center justify-center">
                <Link href={"/products"}>
                    <Button>Products</Button>
                </Link>
                <Link href={"/users"}>
                    <Button>Users</Button>
                </Link>
            </div>
        </div>
    );
};