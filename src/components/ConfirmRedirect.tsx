import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

interface ConfirmRedirectProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function ConfirmRedirect({
  href,
  children,
  ...props
}: ConfirmRedirectProps) {
  const [open, setOpen] = useState(false);

  // only show confirmation for amazon or sciwell links (including short amazon URLs like amzn.in)
  let shouldConfirm = false;
  try {
    const hostname = new URL(href).hostname;
    shouldConfirm = /(?:amazon|amzn|sciwell)/i.test(hostname);
  } catch {
    // if URL parsing fails, fallback to simple string check
    shouldConfirm = /(?:amazon|amzn|sciwell)/i.test(href);
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!shouldConfirm) return; // let the default behavior run
    e.preventDefault();
    setOpen(true);
  };

  const handleContinue = () => {
    setOpen(false);
    window.open(href, "_blank", "noopener noreferrer");
  };

  return (
    <>
      {/* link element, click intercepted if necessary */}
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>

      {/* confirmation dialog */}
      {shouldConfirm && (
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>External Redirect</AlertDialogTitle>
              <AlertDialogDescription>
                You are being redirected to an external website (Amazon/Sciwell)
                to complete your purchase. Please note that all transactions
                will be processed on their official platform.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleContinue}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
