import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog/dialog";

export interface IModalProps {
  trigger: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  body: React.ReactNode;

  footer: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  trigger,
  title,
  description,
  body,
  footer,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {/* body goes here */}
        <div>{body}</div>
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
