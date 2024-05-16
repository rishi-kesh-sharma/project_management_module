import {
  AlertDialog as ShadAlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog/alert-dialog";

interface IAlertDialogProps {
  trigger: React.ReactNode;
  title: string;
  //   headerTitleClasses: string;
  description: string;
  CancelText: string;
  actionText: string;
}

export default function AlertDialog(props: IAlertDialogProps) {
  return (
    <ShadAlertDialog>
      <AlertDialogTrigger asChild>{props.trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.title}</AlertDialogTitle>
          <AlertDialogDescription>{props.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{props.CancelText}</AlertDialogCancel>
          <AlertDialogAction>{props.actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadAlertDialog>
  );
}
