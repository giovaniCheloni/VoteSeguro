"use client"

import { CandidateCard } from "./candidate-card"

interface Candidate {
  id: number
  name: string
  image: string
  proposals: string[]
  votes: number
}

const CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: "João Silva",
    image: "/candidato-pol-tico-homem-1.jpg",
    proposals: [
      "Educação digital para todos",
      "Infraestrutura de saúde moderna",
      "Energia renovável 100%",
      "Emprego e empreendedorismo",
      "Segurança pública eficaz",
    ],
    votes: 15,
  },
  {
    id: 2,
    name: "Maria Santos",
    image: "/candidata-pol-tica-mulher-1.jpg",
    proposals: [
      "Igualdade de gênero",
      "Ambiente sustentável",
      "Economia solidária",
      "Educação inclusiva",
      "Direitos humanos fortalecidos",
    ],
    votes: 12,
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    image: "/candidato-pol-tico-homem-2.jpg",
    proposals: [
      "Desenvolvimento industrial",
      "Reforma tributária",
      "Integração comercial",
      "Inovação e tecnologia",
      "Comércio internacional",
    ],
    votes: 10,
  },
  {
    id: 4,
    name: "Ana Costa",
    image: "/candidata-pol-tica-mulher-2.jpg",
    proposals: [
      "Bem-estar social integral",
      "Descentralização de poder",
      "Transparência governamental",
      "Participação comunitária",
      "Desenvolvimento regional",
    ],
    votes: 5,
  },
]

interface CandidateListProps {
  onVote: (candidate: Candidate) => void
}

export function CandidateList({ onVote }: CandidateListProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Candidatos Disponíveis</h2>
        <p className="text-muted-foreground">Escolha seu candidato e vote com segurança na blockchain</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {CANDIDATES.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} onVote={onVote} />
        ))}
      </div>
    </div>
  )
}
