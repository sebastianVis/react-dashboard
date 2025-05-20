"use client";

/**
 * PiechartTickets Component
 * --------------------------
 * This visualizes the distribution of unassigned tickets per category.
 *
 * ✅ Built with:
 * - Recharts (for the pie chart)
 * - ShadCN UI (Card, AspectRatio, etc.)
 *
 * Displays:
 * - A pie chart with color-coded slices per category
 * - The total ticket count in the center
 * - A legend at the bottom with category names and colors
 */

import * as React from "react";
import { PieChart, Pie, Label } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { labelFor } from "@/lib/categoryConfig";

type TicketData = Record<string, number>;

interface PiechartTicketsProps {
  data: TicketData;
}

// Category color mapping for each pie slice
const CATEGORY_COLORS: Record<string, string> = {
  Retiro: "#ef4444",
  Soporte: "#3b82f6",
  Instalacion: "#22c55e",
  Traslado: "#d1d5db",
};

export function PiechartTickets({ data }: PiechartTicketsProps) {
  /**
   * Convert the raw data into chart data format:
   * [{ category: "Soporte", value: 4, fill: "#3b82f6" }, ...]
   */
  const chartData = React.useMemo(
    () =>
      Object.entries(data).map(([key, value]) => ({
        category: key,
        value,
        fill: CATEGORY_COLORS[key] ?? "#d1d5db",
      })),
    [data]
  );

  /**
   * Build config for ChartContainer, mapping categories to label and color
   */
  const chartConfig: ChartConfig = React.useMemo(
    () =>
      Object.keys(data).reduce((acc, key) => {
        acc[key] = {
          label: labelFor(key),
          color: CATEGORY_COLORS[key] ?? "#d1d5db",
        };
        return acc;
      }, {} as ChartConfig),
    [data]
  );

  /**
   * Compute the total number of unassigned tickets
   */
  const total = React.useMemo(
    () => Object.values(data).reduce((sum, val) => sum + val, 0),
    [data]
  );

  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-1 pb-0">
        {/* Header title */}
        <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
          Tickets No Asignados
        </CardDescription>

        {/* Pie chart area with fixed aspect ratio */}
        <div className="w-full max-w-[120px] justify-center mx-auto">
          <AspectRatio ratio={1}>
            <ChartContainer config={chartConfig} className="w-full h-full">
              <PieChart>
                {/* Tooltip on hover */}
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="category"
                  innerRadius={25}
                  strokeWidth={10}
                >
                  {/* Center label with total count */}
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-2xl font-bold"
                            >
                              {total}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </AspectRatio>
        </div>
      </CardContent>

      {/* Legend */}
      <CardFooter className="flex flex-wrap justify-center gap-3 text-sm">
        {chartData.map(({ category, fill }) => (
          <div key={category} className="flex items-center space-x-1">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: fill }}
            />
            <span className="text-muted-foreground text-xs font-medium">
              {labelFor(category)}
            </span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
