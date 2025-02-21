import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function AvatarHover(){
    return(
        <div className="fixed right-8">
            <HoverCard>
                <HoverCardTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>IM</AvatarFallback>
                </Avatar>
                </HoverCardTrigger>
                <HoverCardContent>
                    Bruno Campos Fonseca
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}