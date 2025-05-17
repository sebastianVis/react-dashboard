"use client"

import * as React from "react"
import { PieChart, Pie, Label } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { labelFor } from "@/lib/categoryConfig"

type TicketData = Record<string, number>

interface PiechartTicketsProps {
  data: TicketData
}

// Hex color mapping for categories
const CATEGORY_COLORS: Record<string, string> = {
  Retiro: "#ef4444",
  Soporte: "#3b82f6",
  Instalacion: "#22c55e",
  Traslado: "#d1d5db",
}

export function PiechartTickets({ data }: PiechartTicketsProps) {
  const chartData = React.useMemo(
    () =>
      Object.entries(data).map(([key, value]) => ({
        category: key,
        value,
        fill: CATEGORY_COLORS[key] ?? "#d1d5db",
      })),
    [data]
  )

  const chartConfig: ChartConfig = React.useMemo(
    () =>
      Object.keys(data).reduce((acc, key) => {
        acc[key] = {
          label: labelFor(key),
          color: CATEGORY_COLORS[key] ?? "#d1d5db",
        }
        return acc
      }, {} as ChartConfig),
    [data]
  )

  const total = React.useMemo(
    () => Object.values(data).reduce((sum, val) => sum + val, 0),
    [data]
  )

  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-1 pb-0 ">
          <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
                Tickets No Asignados
          </CardDescription>
        <div className="w-full max-w-[120px] justify-center mx-auto">
        <AspectRatio ratio={1}>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <PieChart>
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
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </AspectRatio>
        </div>
      </CardContent>
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
  )
}
