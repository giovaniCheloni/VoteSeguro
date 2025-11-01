"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Candidate {
  id: number
  name: string
  image: string
  proposals: string[]
  votes: number
}

interface CandidateCardProps {
  candidate: Candidate
  onVote: (candidate: Candidate) => void
}

export function CandidateCard({ candidate, onVote }: CandidateCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 group hover:border-primary hover:shadow-lg hover:shadow-primary/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 group-hover:bg-primary/5 transition-colors duration-300">
        {/* Foto do candidato */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-40 h-40 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30">
            <Image src={candidate.image || "/placeholder.svg"} alt={candidate.name} fill className="object-cover" />
          </div>
        </div>

        {/* Informações e propostas */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
              {candidate.name}
            </h3>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold">
                <CheckCircle className="h-4 w-4" />
                {candidate.votes} votos
              </span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                Candidato #{candidate.id}
              </span>
            </div>
          </div>

          {/* Propostas */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Propostas de Governo
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {candidate.proposals.map((proposal, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground group-hover:text-foreground/90 transition-colors duration-300"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5 group-hover:bg-primary/80 transition-colors duration-300" />
                  <span>{proposal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botão de votação */}
          <div className="flex gap-3">
            <Button
              onClick={() => onVote(candidate)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30"
            >
              Votar Agora (0.025 ETH)
            </Button>
            <Button
              variant="outline"
              size="icon"
              title="Ver Contrato no EtherScan"
              className="transition-all duration-300 group-hover:border-primary group-hover:text-primary hover:shadow-md hover:shadow-primary/30 bg-transparent"
              onClick={() => {
                const etherscanUrl = `https://etherscan.io/address/0x0000000000000000000000000000000000000000`
                window.open(etherscanUrl, "_blank")
              }}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
