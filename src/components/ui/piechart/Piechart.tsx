"use client"

import * as React from "react"
import { PieChart, Pie, Label } from "recharts"

import {
  Card,
  CardContent,
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

import { labelFor } from "@/lib/categoryConfig"

type TicketData = Record<string, number>

interface PiechartTicketsProps {
  data: TicketData
}

// ✅ Hex color mapping for categories (directly used in fill)
const CATEGORY_COLORS: Record<string, string> = {
  Retiro: "#ef4444",      // Tailwind red-500
  Soporte: "#3b82f6",     // Tailwind blue-500
  Instalacion: "#22c55e", // Tailwind green-500
  Traslado: "#d1d5db",    // Tailwind yellow-400
}

export function PiechartTickets({ data }: PiechartTicketsProps) {
  const chartData = React.useMemo(
    () =>
      Object.entries(data).map(([key, value]) => ({
        category: key,
        value,
        fill: CATEGORY_COLORS[key] ?? "#d1d5db", // fallback gray-300
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
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          <h2 className="text-2xl font-bold text-gray-900">Tickets No Asignados</h2>
          <p className="text-sm text-gray-500 font-normal">
            Información de los tickets que no están asignados actualmente.
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Tickets
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col text-sm">
        <div className="leading-none text-muted-foreground">
          Total acumulado por tipo de ticket
        </div>
      </CardFooter>
    </Card>
  )
}
