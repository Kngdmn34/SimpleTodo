import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Info } from 'lucide-react';

export function ModifyTask() {
    return (

        <AlertDialog>
            <AlertDialogTrigger ><Info className="hover:text-blue-500 hover:transform hover:scale-150 duration-300" /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>About</AlertDialogTitle>
                    <AlertDialogDescription>
                        This Demo app was created with Next Ts, prisma , supabase and tailwind CSS
                        <br /><span className="text-mono text-extralight"> Demo App: Version: 0.1</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>OK</AlertDialogCancel>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}