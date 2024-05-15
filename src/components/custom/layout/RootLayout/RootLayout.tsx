import { cn } from "@udecode/cn";

import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            "[&_.slate-selected]:!bg-primary/20 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/10"
          )}
          suppressHydrationWarning>
          <TooltipProvider
            disableHoverableContent
            delayDuration={500}
            skipDelayDuration={0}>
            <div className="">{children}</div>
          </TooltipProvider>
        </div>
      </ThemeProvider>
    </>
  );
}
