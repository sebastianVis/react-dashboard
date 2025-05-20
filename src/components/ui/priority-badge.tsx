"use client";

import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";

/**
 * PriorityBadge component
 * ------------------------
 * Displays a red "Prioritario" badge with a hover card explaining the meaning.
 */

export function PriorityBadge() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge className="bg-red-800 text-white text-xs px-2 py-0.5 cursor-pointer">
          Prioritario
        </Badge>
      </HoverCardTrigger>

      <HoverCardContent className="bg-white border border-gray-200 shadow-md rounded-md p-4 w-64 text-sm leading-relaxed w-full">
        Este ticket está marcado como <strong>prioritario</strong> debido a una condición crítica (sin servicio). Requiere atención inmediata.
      </HoverCardContent>
    </HoverCard>
  );
}
