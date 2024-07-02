import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Header from "./header";
import Social from "./social";
import BackButton from "./backbutton";

export interface cardwrapperProps {
    children: React.ReactNode;
    headerName: string;
    backButtonContent: string;
    backButtonHref: string;
    showSocial: boolean;

}

const cardwrapper = ({
    children,
    headerName,
    backButtonContent,
    backButtonHref,
    showSocial,
}: cardwrapperProps) => {
    return (


        <Card className="w-[500px] shadow-md " >
            <CardHeader>
                <Header label={headerName} />
            </CardHeader>
            <CardContent>

                {children}
            </CardContent>
            {showSocial &&
                <CardFooter>
                    <Social />
                </CardFooter>}
            <CardFooter>
                <BackButton label={backButtonContent} href={backButtonHref} />
            </CardFooter>
        </Card>

    )
}

export default cardwrapper
