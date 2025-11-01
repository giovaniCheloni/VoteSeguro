"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Metrics } from "@/components/metrics"
import { CandidateList } from "@/components/candidate-list"
import { Ranking } from "@/components/ranking"
import { VoteModal } from "@/components/vote-modal"
import { Web3Provider } from "@/components/web3-provider"

export default function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null)
  const [showVoteModal, setShowVoteModal] = useState(false)
  const [metrics, setMetrics] = useState({
    totalRaised: 0.5,
    totalVotes: 42,
  })

  const handleVote = (candidate: any) => {
    setSelectedCandidate(candidate)
    setShowVoteModal(true)
  }

  const handleConfirmVote = () => {
    setMetrics((prev) => ({
      totalRaised: prev.totalRaised + 0.025,
      totalVotes: prev.totalVotes + 1,
    }))
    setShowVoteModal(false)
  }

  return (
    <Web3Provider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Metrics metrics={metrics} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <CandidateList onVote={handleVote} />
            </div>
            <div>
              <Ranking metrics={metrics} />
            </div>
          </div>

          <VoteModal
            candidate={selectedCandidate}
            open={showVoteModal}
            onOpenChange={setShowVoteModal}
            onConfirm={handleConfirmVote}
          />
        </main>
      </div>
    </Web3Provider>
  )
}
