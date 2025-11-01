"use client"

import { Vote, TrendingUp, Users } from "lucide-react"

interface MetricsProps {
  metrics: {
    totalRaised: number
    totalVotes: number
  }
}

export function Metrics({ metrics }: MetricsProps) {
  const participationPercentage = ((metrics.totalVotes / 200) * 100).toFixed(1)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Total Arrecadado</p>
            <p className="text-3xl font-bold text-primary">{metrics.totalRaised.toFixed(3)} ETH</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Total de Votos</p>
            <p className="text-3xl font-bold text-primary">{metrics.totalVotes}</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Vote className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Participação</p>
            <p className="text-3xl font-bold text-primary">{participationPercentage}%</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Users className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
