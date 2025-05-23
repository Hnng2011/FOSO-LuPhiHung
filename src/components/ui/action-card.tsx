import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
  children?: ReactElement | ReactElement[];
  fit?: boolean;
  action?: { label: string; func: () => void };
  title?: string;
  content?: string | ReactNode;
  classNames?: {
    container?: string;
    header?: string;
    title?: string;
    content?: string;
  };
}

export function ActionCard({
  fit,
  action,
  title,
  content,
  classNames,
  children,
}: ActionCardProps) {
  return (
    <Card
      className={cn(
        fit ? "w-fit" : "",
        "flex items-start",
        classNames?.container
      )}
    >
      <div className="w-full p-4 space-y-6">
        {title && (
          <CardHeader className={cn("p-0", classNames?.header)}>
            <CardTitle className={cn("h3", classNames?.title)}>
              {title}
            </CardTitle>
          </CardHeader>
        )}

        {(children || content) && (
          <CardContent
            className={cn("flex-wrap break-words p-0", classNames?.content)}
          >
            {children || content}
          </CardContent>
        )}
      </div>

      {action && (
        <CardFooter className="p-4">
          <Button onClick={action?.func}>{action?.label}</Button>
        </CardFooter>
      )}
    </Card>
  );
}
