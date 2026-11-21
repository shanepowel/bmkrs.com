import * as React from "react";
import { cn } from "@/lib/utils";
import { Surface, type SurfaceProps } from "./surface";
import { Stack } from "./stack";
import { Text, Eyebrow } from "./text";

export interface ContentCardProps
  extends Omit<SurfaceProps, "children" | "title"> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  titleClamp?: 2 | 3 | 4;
  descriptionClamp?: 3 | 4 | 5 | 6;
}

/**
 * Equal-height friendly content card. Title and description clamp so cards in a
 * row stay visually consistent even when copy lengths differ.
 */
export function ContentCard({
  eyebrow,
  title,
  description,
  footer,
  children,
  className,
  titleClamp = 3,
  descriptionClamp = 4,
  variant = "bordered",
  padding = "lg",
  ...props
}: ContentCardProps) {
  return (
    <Surface
      as="article"
      variant={variant}
      padding={padding}
      className={cn("flex h-full flex-col", className)}
      {...props}
    >
      <Stack gap="md" className="flex-1">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Text variant="h3" clamp={titleClamp}>
          {title}
        </Text>
        {description ? (
          <Text variant="body" tone="muted" clamp={descriptionClamp} className="flex-1">
            {description}
          </Text>
        ) : null}
        {children}
      </Stack>
      {footer ? <div className="mt-8 min-w-0">{footer}</div> : null}
    </Surface>
  );
}
