"use client"

import { Trophy, TrendingUp } from "lucide-react"

interface RankingProps {
  metrics: {
    totalRaised: number
    totalVotes: number
  }
}

const RANKING = [
  { position: 1, name: "João Silva", votes: 15, percentage: 35.7 },
  { position: 2, name: "Maria Santos", votes: 12, percentage: 28.6 },
  { position: 3, name: "Carlos Oliveira", votes: 10, percentage: 23.8 },
  { position: 4, name: "Ana Costa", votes: 5, percentage: 11.9 },
]

export function Ranking({ metrics }: RankingProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Ranking</h2>
      </div>

      <div className="space-y-4">
        {RANKING.map((item) => (
          <div key={item.position} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                  {item.position}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.votes} votos</p>
                </div>
              </div>
              <span className="text-sm font-bold text-primary">{item.percentage}%</span>
            </div>

            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
          <TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-foreground mb-1">Informações da Votação</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Totalizando {metrics.totalVotes} votos e {metrics.totalRaised.toFixed(3)} ETH arrecadados para o fundo de
              transparência.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
